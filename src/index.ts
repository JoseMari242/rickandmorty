/*document.addEventListener('DOMContentLoaded', function () {
  const listEpisode = document.getElementById('list-episode');
  const container = document.getElementById('container');
  const nextButton = document.getElementById('nextButton');

  let currentPage = 1; // Página actual
  const episodesPerPage = 10; // Número de episodios por página

  // Función para obtener episodios de la API
  function fetchEpisodes(page) {
      const apiUrl = `https://rickandmortyapi.com/api/episode?page=${page}`;
      fetch(apiUrl)
          .then(response => response.json())
          .then(data => {
              // Limpiar la lista de episodios
              listEpisode.innerHTML = '';

              // En el Sidebar
              data.results.slice(0, episodesPerPage).forEach((episodeData, index) => {
                  const li = document.createElement('li');
                  li.classList.add('list-group-item');
                  li.textContent = `Episodio ${index + 1 + (page - 1) * episodesPerPage}`;
                  li.addEventListener('click', () => showEpisodeDetails(episodeData));
                  listEpisode.appendChild(li);
              });
          })
          .catch(error => console.error('Error fetching data:', error));
  }

  // Función para mostrar detalles del episodio
  function showEpisodeDetails(episodeData) {
      // Limpiar contenido previo
      container.innerHTML = '';

      // En el Main Container
      const episodeDiv = document.createElement('div');
      episodeDiv.classList.add('episode-info');
      episodeDiv.innerHTML = `
          <h3>${episodeData.name}</h3>
          <p>Fecha de estreno: ${episodeData.air_date}</p>
          <p>Código del episodio: ${episodeData.episode}</p>
      `;
      container.appendChild(episodeDiv);
  }

  // Inicializar la carga de episodios
  fetchEpisodes(currentPage);

  // Manejar clic en el botón "NEXT"
  nextButton.addEventListener('click', function () {
      currentPage++;
      fetchEpisodes(currentPage);
  });
});*/

/*import {Episode} from "./interfaces/episodes";
import {Character} from "./interfaces/characters";
import {Location} from "./interfaces/locations";

async function displayInfo() {
  try {
    const data = await fetch("https://rickandmortyapi.com/api/episode")
    const JSONdata: Episode[] = await data.json();
    console.log(JSONdata);

    const episodeList = document.getElementById('list-episode');

    JSONdata.forEach(episode => {
        const episodeCard = `
          <article>
          <div>${episode.name}</div>
          </article>
  `
  const episodeCardElement = document.createElement('div');
  episodeCardElement.innerHTML = episodeCard;

  episodeList.appendChild(episodeCardElement);


});

  } catch (error) {
    console.log(error); 

  }
}

displayInfo()*/



/*import { TopLevel } from "./interfaces/TopLevel";

async function displayInfo() {
  try {
    const data = await fetch("https://rickandmortyapi.com/api/episode");
    const JSONdata: TopLevel = await data.json();
    const info = JSONdata.results;

    const listaEpisodios = document.getElementById('list-episode');

    info.forEach(result => {
      const tarjetaEpisodio = `
        <article>
          <div>${result.air_date}</div>
        </article>
      `;

      const elementoTarjetaEpisodio = document.createElement('div');
      elementoTarjetaEpisodio.innerHTML = tarjetaEpisodio;

      listaEpisodios.appendChild(elementoTarjetaEpisodio);
    });

  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("DOMContentLoaded", function() {
    displayInfo();
});*/


/*import { TopLevel } from "./interfaces/TopLevel";

async function displayInfo() {
  try {
    const data = await fetch("https://rickandmortyapi.com/api/episode");
    const JSONdata: TopLevel = await data.json();
    const info = JSONdata.info; // Accede a la propiedad 'info'
    const episodes = JSONdata.results;

    const listaEpisodios = document.getElementById('list-episode');
    const totalEpisodesElement = document.getElementById('total-episodes');

    // Muestra el número total de episodios en el elemento con id 'total-episodes'
    totalEpisodesElement.textContent = `Total Episodes: ${info.count}`;

    episodes.forEach(result => {
      const tarjetaEpisodio = `
        <article>
          <div>${result.name}</div>
        </article>
      `;

      const elementoTarjetaEpisodio = document.createElement('div');
      elementoTarjetaEpisodio.innerHTML = tarjetaEpisodio;

      listaEpisodios.appendChild(elementoTarjetaEpisodio);
    });

  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("DOMContentLoaded", function() {
    displayInfo();
});*/

/*import { TopLevel } from "./interfaces/TopLevel";

async function displayInfo() {
  try {
    let totalEpisodes = [];
    let nextLink = "https://rickandmortyapi.com/api/episode";

    // Realiza solicitudes hasta que no haya más enlaces 'next'
    while (nextLink) {
      const data = await fetch(nextLink);
      const JSONdata: TopLevel = await data.json();
      const episodes = JSONdata.results;

      // Agrega los episodios al array totalEpisodes
      totalEpisodes = totalEpisodes.concat(episodes);

      // Actualiza nextLink con el enlace proporcionado en 'next'
      nextLink = JSONdata.info.next;
    }

    const listaEpisodios = document.getElementById('list-episode');
    const totalEpisodesElement = document.getElementById('total-episodes');

    // Muestra el número total de episodios en el elemento con id 'total-episodes'
    totalEpisodesElement.textContent = `Total Episodes: ${totalEpisodes.length}`;

    totalEpisodes.forEach(result => {
      const tarjetaEpisodio = `
        <article>
          <div>${result.name}</div>
        </article>
      `;

      const elementoTarjetaEpisodio = document.createElement('div');
      elementoTarjetaEpisodio.innerHTML = tarjetaEpisodio;

      listaEpisodios.appendChild(elementoTarjetaEpisodio);
    });

  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  displayInfo();
});*/

/*import { TopLevel, Result } from "./interfaces/TopLevel";

async function displayInfo() {
  try {
    let totalEpisodes: Result[] = [];
    let nextLink = "https://rickandmortyapi.com/api/episode";

    // Realiza solicitudes hasta que no haya más enlaces 'next'
    while (nextLink) {
      const data = await fetch(nextLink);
      const JSONdata: TopLevel = await data.json();
      const episodes = JSONdata.results;

      // Agrega los episodios al array totalEpisodes
      totalEpisodes = totalEpisodes.concat(episodes);

      // Actualiza nextLink con el enlace proporcionado en 'next'
      nextLink = JSONdata.info.next;
    }

    const listaEpisodios = document.getElementById('list-episode');
    const totalEpisodesElement = document.getElementById('total-episodes');
    const mainContainer = document.getElementById('container');

    // Muestra el número total de episodios en el elemento con id 'total-episodes'
    totalEpisodesElement.textContent = `Total Episodes: ${totalEpisodes.length}`;

    totalEpisodes.forEach(result => {
      const listItem = document.createElement('li');
      listItem.textContent = result.name;

      listItem.addEventListener('click', () => {
        // Limpia el contenido del contenedor principal
        mainContainer.innerHTML = '';

        // Agrega detalles del episodio al contenedor principal
        const episodeDetails = `
          <div>
            <h2>${result.name}</h2>
            <p>Air Date: ${result.air_date}</p>
            <p>Episode: ${result.episode}</p>
            <p>Characters: ${result.characters.join(', ')}</p>
          </div>
          `;
          
          mainContainer.innerHTML = episodeDetails;
        });
        
        // Agrega el elemento de la lista al listado en la barra lateral
        listaEpisodios.appendChild(listItem);
      });
      
  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  displayInfo();
});*/


/*import { TopLevel, Result } from "./interfaces/TopLevel";

async function displayInfo() {
  try {
    let totalEpisodes: Result[] = [];
    let nextLink = "https://rickandmortyapi.com/api/episode";

    // Realiza solicitudes hasta que no haya más enlaces 'next'
    while (nextLink) {
      const data = await fetch(nextLink);
      const JSONdata: TopLevel = await data.json();
      const episodes = JSONdata.results;

      // Agrega los episodios al array totalEpisodes
      totalEpisodes = totalEpisodes.concat(episodes);

      // Actualiza nextLink con el enlace proporcionado en 'next'
      nextLink = JSONdata.info.next;
    }

    const listaEpisodios = document.getElementById('list-episode');
    const totalEpisodesElement = document.getElementById('total-episodes');
    const mainContainer = document.getElementById('container');

    // Muestra el número total de episodios en el elemento con id 'total-episodes'
    totalEpisodesElement.textContent = `Total Episodes: ${totalEpisodes.length}`;

    totalEpisodes.forEach((result, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `Episode ${index + 1}`;

      listItem.addEventListener('click', () => {
        // Limpia el contenido del contenedor principal
        mainContainer.innerHTML = '';

        // Agrega detalles del episodio al contenedor principal
        const episodeDetails = `
          <div>
            <h2>${result.name}</h2>
            <p>Air Date: ${result.air_date}</p>
            <p>Episode: ${result.episode}</p>
            <img src="${result.characters}">
          <p>Characters: ${result.characters.join(', ')}</p>
          </div>
        `;

        mainContainer.innerHTML = episodeDetails;
      });

      // Agrega el elemento de la lista al listado en la barra lateral
      listaEpisodios.appendChild(listItem);
    });

  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  displayInfo();
});*/

/*import { TopLevel, Result } from "./interfaces/TopLevel";

async function displayInfo() {
  try {
    let totalEpisodes: Result[] = [];
    let nextLink = "https://rickandmortyapi.com/api/episode";

    // Realiza solicitudes hasta que no haya más enlaces 'next'
    while (nextLink) {
      const data = await fetch(nextLink);
      const JSONdata: TopLevel = await data.json();
      const episodes = JSONdata.results;

      // Agrega los episodios al array totalEpisodes
      totalEpisodes = totalEpisodes.concat(episodes);

      // Actualiza nextLink con el enlace proporcionado en 'next'
      nextLink = JSONdata.info.next;
    }

    const listaEpisodios = document.getElementById('list-episode');
    const totalEpisodesElement = document.getElementById('total-episodes');
    const mainContainer = document.getElementById('container');

    // Muestra el número total de episodios en el elemento con id 'total-episodes'
    totalEpisodesElement.textContent = `Total Episodes: ${totalEpisodes.length}`;

    totalEpisodes.forEach((result, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `Episode ${index + 1}`;

      listItem.addEventListener('click', async () => {
        // Limpia el contenido del contenedor principal
        mainContainer.innerHTML = '';

        // Agrega detalles del episodio al contenedor principal
        const episodeDetails = document.createElement('div');
        episodeDetails.innerHTML = `
          <div>
            <h2>${result.name}</h2>
            <p>Air Date: ${result.air_date}</p>
            <p>Episode: ${result.episode}</p>
          </div>
        `;

        // Obtiene información de los personajes y agrega imágenes al contenedor principal
        for (const characterUrl of result.characters) {
          const characterResponse = await fetch(characterUrl);
          const characterData = await characterResponse.json();

          const characterImage = document.createElement('img');
          characterImage.src = characterData.image;
          characterImage.alt = characterData.name;

          episodeDetails.appendChild(characterImage);
        }

        mainContainer.appendChild(episodeDetails);
      });

      // Agrega el elemento de la lista al listado en la barra lateral
      listaEpisodios.appendChild(listItem);
    });

  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  displayInfo();
});*/

/*import { TopLevel, Result } from "./interfaces/TopLevel";

async function displayInfo() {
  try {
    let totalEpisodes: Result[] = [];
    let nextLink = "https://rickandmortyapi.com/api/episode";

    // Realiza solicitudes hasta que no haya más enlaces 'next'
    while (nextLink) {
      const data = await fetch(nextLink);
      const JSONdata: TopLevel = await data.json();
      const episodes = JSONdata.results;

      // Agrega los episodios al array totalEpisodes
      totalEpisodes = totalEpisodes.concat(episodes);

      // Actualiza nextLink con el enlace proporcionado en 'next'
      nextLink = JSONdata.info.next;
    }

    const listaEpisodios = document.getElementById('list-episode');
    const totalEpisodesElement = document.getElementById('total-episodes');
    const mainContainer = document.getElementById('container');

    // Muestra el número total de episodios en el elemento con id 'total-episodes'
    totalEpisodesElement.textContent = `Total Episodes: ${totalEpisodes.length}`;

    totalEpisodes.forEach((result, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `Episode ${index + 1}`;

      listItem.addEventListener('click', async () => {
        // Limpia el contenido del contenedor principal
        mainContainer.innerHTML = '';

        // Agrega detalles del episodio al contenedor principal
        const episodeDetails = document.createElement('div');
        episodeDetails.innerHTML = `
          <div>
            <h2>${result.name}</h2>
            <p>Air Date: ${result.air_date}</p>
            <p>Episode: ${result.episode}</p>
          </div>
        `;

        // Obtiene información de los personajes y agrega imágenes y detalles al contenedor principal
        for (const characterUrl of result.characters) {
          const characterResponse = await fetch(characterUrl);
          const characterData = await characterResponse.json();

          const characterContainer = document.createElement('div');

          const characterImage = document.createElement('img');
          characterImage.src = characterData.image;
          characterImage.alt = characterData.name;

          const characterDetails = document.createElement('p');
          characterDetails.innerHTML = `
            <strong>${characterData.name}</strong><br>
            Gender: ${characterData.gender}<br>
            Status: ${characterData.status}<br>
            Species: ${characterData.species}
          `;

          characterContainer.appendChild(characterImage);
          characterContainer.appendChild(characterDetails);

          episodeDetails.appendChild(characterContainer);
        }

        mainContainer.appendChild(episodeDetails);
      });

      // Agrega el elemento de la lista al listado en la barra lateral
      listaEpisodios.appendChild(listItem);
    });

  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  displayInfo();
});*/

/*import { TopLevel, Result } from "./interfaces/TopLevel";

// Enum para las propiedades del personaje


async function displayInfo() {
  try {
    let totalEpisodes: Result[] = [];
    let nextLink = "https://rickandmortyapi.com/api/episode";

    // Realiza solicitudes hasta que no haya más enlaces 'next'
    while (nextLink) {
      const data = await fetch(nextLink);
      const JSONdata: TopLevel = await data.json();
      const episodes = JSONdata.results;

      // Agrega los episodios al array totalEpisodes
      totalEpisodes = totalEpisodes.concat(episodes);

      // Actualiza nextLink con el enlace proporcionado en 'next'
      nextLink = JSONdata.info.next;
    }

    const listaEpisodios = document.getElementById('list-episode');
    const totalEpisodesElement = document.getElementById('total-episodes');
    const mainContainer = document.getElementById('container');

    // Muestra el número total de episodios en el elemento con id 'total-episodes'
    totalEpisodesElement.textContent = `Total Episodes: ${totalEpisodes.length}`;

    totalEpisodes.forEach((result, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `Episode ${index + 1}`;

      listItem.addEventListener('click', async () => {
        // Limpia el contenido del contenedor principal
        mainContainer.innerHTML = '';

        // Agrega detalles del episodio al contenedor principal
        const episodeDetails = document.createElement('div');
        episodeDetails.innerHTML = `
          <div>
            <h2>${result.name}</h2>
            <p>Air Date: ${result.air_date}</p>
            <p>Episode: ${result.episode}</p>
          </div>
        `;

        
        
        enum CharacterProperties {
          Name = 'name',
          Gender = 'gender',
          Status = 'status',
          Species = 'species',
        }
        
        // Obtiene información de los personajes y agrega imágenes y detalles al contenedor principal
        for (const characterUrl of result.characters) {
          const characterResponse = await fetch(characterUrl);
          const characterData = await characterResponse.json();

          const characterContainer = document.createElement('div');

          const characterImage = document.createElement('img');
          characterImage.src = characterData.image;
          characterImage.alt = characterData[CharacterProperties.Name];

          const characterDetails = document.createElement('p');
          characterDetails.innerHTML = `
            <strong>${characterData[CharacterProperties.Name]}</strong><br>
            ${CharacterProperties.Gender}: ${characterData[CharacterProperties.Gender]}<br>
            ${CharacterProperties.Status}: ${characterData[CharacterProperties.Status]}<br>
            ${CharacterProperties.Species}: ${characterData[CharacterProperties.Species]}
          `;

          characterContainer.appendChild(characterImage);
          characterContainer.appendChild(characterDetails);

          episodeDetails.appendChild(characterContainer);
        }

        mainContainer.appendChild(episodeDetails);
      });

      // Agrega el elemento de la lista al listado en la barra lateral
      listaEpisodios.appendChild(listItem);
    });

  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  displayInfo();
});*/

// index.ts

import { TopLevel, Result } from "./interfaces/TopLevel";

// Enum para las propiedades del personaje
enum CharacterProperties {
  Name = 'name',
  Gender = 'gender',
  Status = 'status',
  Species = 'species',
  Location = 'location',
}

// Función para mostrar la pantalla de detalles del personaje
function showCharacterDetails(characterData: any) {
  // Oculta el contenedor de personajes
  document.getElementById('character-container')!.style.display = 'none';

  // Muestra el contenedor de detalles del personaje
  const characterDetailContainer = document.getElementById('character-detail-container')!;
  characterDetailContainer.style.display = 'block';
  characterDetailContainer.innerHTML = `
    <h2>${characterData[CharacterProperties.Name]}</h2>
    <img src="${characterData.image}" alt="${characterData[CharacterProperties.Name]}">
    <p>${CharacterProperties.Gender}: ${characterData[CharacterProperties.Gender]}</p>
    <p>${CharacterProperties.Status}: ${characterData[CharacterProperties.Status]}</p>
    <p>${CharacterProperties.Species}: ${characterData[CharacterProperties.Species]}</p>
    <h3>Location:</h3>
    <p>${CharacterProperties.Location}: ${characterData[CharacterProperties.Location].name}</p>
  `;
}

async function displayInfo() {
  try {
    let totalEpisodes: Result[] = [];
    let nextLink = "https://rickandmortyapi.com/api/episode";

    // Realiza solicitudes hasta que no haya más enlaces 'next'
    while (nextLink) {
      const data = await fetch(nextLink);
      const JSONdata: TopLevel = await data.json();
      const episodes = JSONdata.results;

      // Agrega los episodios al array totalEpisodes
      totalEpisodes = totalEpisodes.concat(episodes);

      // Actualiza nextLink con el enlace proporcionado en 'next'
      nextLink = JSONdata.info.next;
    }

    const listaEpisodios = document.getElementById('list-episode')!;
    const totalEpisodesElement = document.getElementById('total-episodes')!;
    const mainContainer = document.getElementById('container')!;
    const characterContainer = document.getElementById('character-container')!;
    const characterDetailContainer = document.getElementById('character-detail-container')!;

    // Muestra el número total de episodios en el elemento con id 'total-episodes'
    totalEpisodesElement.textContent = `Total Episodes: ${totalEpisodes.length}`;

    totalEpisodes.forEach((result, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `Episode ${index + 1}`;

      listItem.addEventListener('click', async () => {
        // Oculta el contenedor principal
        mainContainer.style.display = 'none';

        // Muestra el contenedor de personajes
        characterContainer.style.display = 'block';

        // Limpia el contenido del contenedor de personajes
        characterContainer.innerHTML = '';

        // Agrega detalles del episodio al contenedor de personajes
        const episodeDetails = document.createElement('div');
        episodeDetails.innerHTML = `
          <h2>${result.name}</h2>
          <p>Air Date: ${result.air_date}</p>
          <p>Episode: ${result.episode}</p>
        `;

        // Obtiene información de los personajes y agrega imágenes y detalles al contenedor de personajes
        for (const characterUrl of result.characters) {
          const characterResponse = await fetch(characterUrl);
          const characterData = await characterResponse.json();

          const characterItem = document.createElement('div');
          characterItem.innerHTML = `
            <h3>${characterData[CharacterProperties.Name]}</h3>
            <img src="${characterData.image}" alt="${characterData[CharacterProperties.Name]}">
            <p>${CharacterProperties.Gender}: ${characterData[CharacterProperties.Gender]}</p>
            <p>${CharacterProperties.Status}: ${characterData[CharacterProperties.Status]}</p>
            <p>${CharacterProperties.Species}: ${characterData[CharacterProperties.Species]}</p>
            <h3>Location:</h3>
            <p>${CharacterProperties.Location}: ${characterData[CharacterProperties.Location].name}</p>
          `;

          characterItem.addEventListener('click', () => {
            // Muestra detalles del personaje cuando se hace clic en el nombre
            showCharacterDetails(characterData);
          });

          characterContainer.appendChild(characterItem);
        }
      });

      // Agrega el elemento de la lista al listado en la barra lateral
      listaEpisodios.appendChild(listItem);
    });

  } catch (error) {
    console.log(error);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  displayInfo();
});












