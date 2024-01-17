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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Enum para las propiedades del personaje
var CharacterProperties;
(function (CharacterProperties) {
    CharacterProperties["Name"] = "name";
    CharacterProperties["Gender"] = "gender";
    CharacterProperties["Status"] = "status";
    CharacterProperties["Species"] = "species";
    CharacterProperties["Location"] = "location";
})(CharacterProperties || (CharacterProperties = {}));
// Función para mostrar la pantalla de detalles del personaje
function showCharacterDetails(characterData) {
    // Oculta el contenedor de personajes
    document.getElementById('character-container').style.display = 'none';
    // Muestra el contenedor de detalles del personaje
    const characterDetailContainer = document.getElementById('character-detail-container');
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
function displayInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let totalEpisodes = [];
            let nextLink = "https://rickandmortyapi.com/api/episode";
            // Realiza solicitudes hasta que no haya más enlaces 'next'
            while (nextLink) {
                const data = yield fetch(nextLink);
                const JSONdata = yield data.json();
                const episodes = JSONdata.results;
                // Agrega los episodios al array totalEpisodes
                totalEpisodes = totalEpisodes.concat(episodes);
                // Actualiza nextLink con el enlace proporcionado en 'next'
                nextLink = JSONdata.info.next;
            }
            const listaEpisodios = document.getElementById('list-episode');
            const totalEpisodesElement = document.getElementById('total-episodes');
            const mainContainer = document.getElementById('container');
            const characterContainer = document.getElementById('character-container');
            const characterDetailContainer = document.getElementById('character-detail-container');
            // Muestra el número total de episodios en el elemento con id 'total-episodes'
            totalEpisodesElement.textContent = `Total Episodes: ${totalEpisodes.length}`;
            totalEpisodes.forEach((result, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `Episode ${index + 1}`;
                listItem.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
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
                        const characterResponse = yield fetch(characterUrl);
                        const characterData = yield characterResponse.json();
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
                }));
                // Agrega el elemento de la lista al listado en la barra lateral
                listaEpisodios.appendChild(listItem);
            });
        }
        catch (error) {
            console.log(error);
        }
    });
}
document.addEventListener("DOMContentLoaded", function () {
    displayInfo();
});
export {};
