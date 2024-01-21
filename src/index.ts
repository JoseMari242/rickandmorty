// IMPORT INTERFACE OF API 

/*import { Api, Result } from "./interfaces/api";

document.addEventListener("DOMContentLoaded", function() {

// Main Function 
async function callApi() { // Execute API
  try {
    

    const uploadEpisodes = async () => {
      const url = `https://rickandmortyapi.com/api/episode?page=${presentPage}`;
      const data = await fetch(url);
      const JSONdata: Api = await data.json(); // Change information to JSON syntax
      visibleEpisodes = JSONdata.results;
      entireEpisodes = JSONdata.info.count; 
      console.log(JSONdata);
    };
    
    // GLOBAL VARIABLES
    let presentPage = 1;
    const resultsPerPage = 20; // Fetch sections in sets of 20
    let visibleEpisodes: Result[] = []; // Execute the Result interface
    let entireEpisodes: number;
    
    // DOM
    const showEpisodes = () => {
      const listEpisodes = document.getElementById('episode-list');
      const mainContainer = document.getElementById('main-container');
      const characterContainer = document.getElementById('character-container');
      const nextButton = document.getElementById('nextButton');
      
      // Compute initial episode number for the present page
      const firstEpisodeNumber = (presentPage - 1) * resultsPerPage + 1;

      visibleEpisodes.forEach((result, index) => {
        const episodeNumber = firstEpisodeNumber + index;

        const listItem = document.createElement('li'); // Generate episode roster
        listItem.textContent = `Episode ${episodeNumber}`;
        listItem.classList.add('list-group-item-action');

        listItem.addEventListener('click', async () => {
          // Remove data from the main and character containers
          mainContainer.innerHTML = '';
          characterContainer.innerHTML = '';

          // Append episode particulars to the main container
          const  episodeDescription = document.createElement('div');
          episodeDescription.innerHTML = `
            <div class="container-style">
              <h2>${result.name}</h2>
              <p>Air Date: ${result.air_date}</p>
              <p>Episode: ${result.episode}</p>
            </div>
          `;
          
          // Fetch character information and add images along with details to the character container
          for (const characterUrl of result.characters) {
            const characterResponse = await fetch(characterUrl);
            const characterData = await characterResponse.json();

            const characterDetails = document.createElement('div'); // Generate div for character specifics
            characterDetails.classList.add('character-details');

            const characterImage = document.createElement('img'); // Generate image component for character pictures
            characterImage.src = characterData.image;
            characterImage.alt = characterData.name;
            characterImage.classList.add('character-image');


          // Show character information
            characterDetails.innerHTML =  ` 
            <strong>${characterData.name}</strong><br>
              Gender: ${characterData.gender}<br>
              Status: ${characterData.status}<br>
              Species: ${characterData.species}<br>
              Location: ${characterData.location.name}
            `;

            // Append character info to the main div
            characterDetails.appendChild(characterImage);
            characterContainer.appendChild(characterDetails);
          }

          mainContainer.appendChild(episodeDescription);
        });

        listEpisodes.appendChild(listItem);
      });

      // Trigger Next button functionality only when more episodes need loading
      nextButton.disabled = presentPage * resultsPerPage >= entireEpisodes;
    };

    await uploadEpisodes();
    showEpisodes();

    const nextButton = document.getElementById('nextButton'); // Functionality of the Next button
    nextButton.addEventListener('click', async () => {
      if (presentPage * resultsPerPage < entireEpisodes) {
        presentPage++;
        await uploadEpisodes();
        showEpisodes();
      }
    });

  } catch (error) {
    console.log(error);
  }
}


  callApi(); // CALL MAIN FUNCTION 
});*/


// STEP 2 EXTRA
// IMPORT API'S INTERFACES
import { TopLevel, Result } from "./interfaces/general";

interface CharacterData {
  name: string;
  image: string;
  gender: string;
  status: string;
  species: string;
  origin: { name: string };
  location: { name: string; url: string };
}

document.addEventListener("DOMContentLoaded", function () {
  // PRINCIPAL FUNCTION
  async function callApi() {
    try {
      const uploadEpisodes = async () => {
        const url = `https://rickandmortyapi.com/api/episode?page=${presentPage}`;
        const data = await fetch(url);
        const JSONdata: TopLevel = await data.json(); // Convert information to JSON language
        visibleEpisodes = JSONdata.results;
        entireEpisodes = JSONdata.info.count; // Save total episodes
        console.log(JSONdata);
      };

      // GLOBAL VARIABLES
      let presentPage = 1;
      const resultsPerPage = 20; // Load chapters 20 at a time
      let visibleEpisodes: Result[] = []; // Call the Result interface
      let entireEpisodes: number;

      // DOM
      const showEpisodes = () => {
        const listEpisodes = document.getElementById('episode-list');
        const mainContainer = document.getElementById('main-container');
        const characterContainer = document.getElementById('character-container');
        const nextButton = document.getElementById('nextButton');

        // Calculate starting episode number for the current page
        const firstEpisodeNumber = (presentPage - 1) * resultsPerPage + 1;

        visibleEpisodes.forEach((result, index) => {
          const episodeNumber = firstEpisodeNumber + index;

          const listItem = document.createElement('li'); // Creation of episode list
          listItem.textContent = `Episode ${episodeNumber}`;
          listItem.classList.add('list-group-item-action');

          listItem.addEventListener('click', async () => {
            mainContainer.innerHTML = '';
            characterContainer.innerHTML = '';

            const episodeDescription = document.createElement('div');
            episodeDescription.innerHTML = `
              <div class="container-style">
                <h2>${result.name}</h2>
                <p>Air Date: ${result.air_date}</p>
                <p>Episode: ${result.episode}</p>
              </div>
            `;

            for (const characterUrl of result.characters) {
              const characterResponse = await fetch(characterUrl);
              const characterData: CharacterData = await characterResponse.json();

              const characterDetails = document.createElement('div');
              characterDetails.classList.add('character-details');

              const characterImage = document.createElement('img');
              characterImage.src = characterData.image;
              characterImage.alt = characterData.name;
              characterImage.classList.add('character-image');

              const characterName = document.createElement('div');
              characterName.classList.add('character-name');
              characterName.innerHTML = `
                <strong>${characterData.name}</strong><br>
                Species: ${characterData.species}<br>
                Status: ${characterData.status}
              `;
              characterName.addEventListener('click', () => {
                showCharacterDetails(characterData, characterContainer);
              });

              characterDetails.appendChild(characterName);
              characterDetails.appendChild(characterImage);
              characterContainer.appendChild(characterDetails);
            }

            mainContainer.appendChild(episodeDescription);
          });

          listEpisodes.appendChild(listItem);
        });

        // Next button is only activated if there are more episodes to load
        nextButton.disabled = presentPage * resultsPerPage >= entireEpisodes;
      };

      // Function to show character details
      function showCharacterDetails(character: CharacterData, container: HTMLElement) {
        container.classList.add("character-card");
        container.innerHTML = `
          <div class="character-details">
            <h2>${character.name}</h2>
            <img src="${character.image}" alt="${character.name}" class="character-image">
            <p>Species: ${character.species}</p>
            <p>Status: ${character.status}</p>
            <p>Gender: ${character.gender}</p>
            <p>Origin: ${character.origin.name}</p>
            <p>Location: <a href="#" id="locationLink">${character.location.name}</a></p>
          </div>
        `;

        const locationLink = document.getElementById("locationLink");
        locationLink.addEventListener("click", async () => {
          await loadLocationDetails(character.location.url, container);
        });
      }

      // Function to load location details
      async function loadLocationDetails(locationUrl: string, container: HTMLElement) {
        try {
          const locationResponse = await fetch(locationUrl);
          const locationData = await locationResponse.json();

          container.innerHTML += `
            <div class="location-details">
              <h3>${locationData.name}</h3>
              <p>Type: ${locationData.type}</p>
              <p>Dimension: ${locationData.dimension}</p>
              <p>Residents: ${locationData.residents.length}</p>
            </div>
          `;
        } catch (error) {
          console.log(error);
        }
      }

      // CALL FUNCTIONS
      await uploadEpisodes();
      showEpisodes();

      // Next button functionality
      const nextButton = document.getElementById('nextButton');
      nextButton.addEventListener('click', async () => {
        if (presentPage * resultsPerPage < entireEpisodes) {
          presentPage++;
          await uploadEpisodes();
          showEpisodes();
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  callApi(); // CALL PRINCIPAL FUNCTION
});


























