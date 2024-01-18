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
function displayInfo() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let currentPage = 1;
            const episodesPerPage = 20;
            let displayedEpisodes = [];
            let totalEpisodes;
            const loadEpisodes = () => __awaiter(this, void 0, void 0, function* () {
                const nextLink = `https://rickandmortyapi.com/api/episode?page=${currentPage}`;
                const data = yield fetch(nextLink);
                const JSONdata = yield data.json();
                displayedEpisodes = JSONdata.results;
                totalEpisodes = JSONdata.info.count; // Guarda el total de episodios
            });
            const renderEpisodes = () => {
                const listaEpisodios = document.getElementById('list-episode');
                const mainContainer = document.getElementById('container');
                const nextButton = document.getElementById('nextButton');
                // Limpiar la barra lateral antes de agregar nuevos elementos
                listaEpisodios.innerHTML = '';
                // Calcular el número de episodio inicial para la página actual
                const startingEpisodeNumber = (currentPage - 1) * episodesPerPage + 1;
                displayedEpisodes.forEach((result, index) => {
                    const episodeNumber = startingEpisodeNumber + index;
                    const listItem = document.createElement('li');
                    listItem.textContent = `Episode ${episodeNumber}`;
                    listItem.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
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
                        let CharacterProperties;
                        (function (CharacterProperties) {
                            CharacterProperties["Name"] = "name";
                            CharacterProperties["Gender"] = "gender";
                            CharacterProperties["Status"] = "status";
                            CharacterProperties["Species"] = "species";
                            CharacterProperties["Location"] = "location";
                        })(CharacterProperties || (CharacterProperties = {}));
                        // Obtiene información de los personajes y agrega imágenes y detalles al contenedor principal
                        for (const characterUrl of result.characters) {
                            const characterResponse = yield fetch(characterUrl);
                            const characterData = yield characterResponse.json();
                            const characterContainer = document.createElement('div');
                            const characterImage = document.createElement('img');
                            characterImage.src = characterData.image;
                            characterImage.alt = characterData[CharacterProperties.Name];
                            const characterDetails = document.createElement('p');
                            characterDetails.innerHTML = `
              <strong>${characterData[CharacterProperties.Name]}</strong><br>
              ${CharacterProperties.Gender}: ${characterData[CharacterProperties.Gender]}<br>
              ${CharacterProperties.Status}: ${characterData[CharacterProperties.Status]}<br>
              ${CharacterProperties.Species}: ${characterData[CharacterProperties.Species]}<br>
              ${CharacterProperties.Location}: ${characterData[CharacterProperties.Location].name}
            `;
                            characterContainer.appendChild(characterImage);
                            characterContainer.appendChild(characterDetails);
                            episodeDetails.appendChild(characterContainer);
                        }
                        mainContainer.appendChild(episodeDetails);
                    }));
                    // Agrega el elemento de la lista al listado en la barra lateral
                    listaEpisodios.appendChild(listItem);
                });
                // Modifica el texto del botón "Next" a "Back" si estás en la última página
                nextButton.textContent = currentPage * episodesPerPage >= totalEpisodes ? 'Back' : 'Next';
            };
            const resetPage = () => {
                currentPage = 1;
                // Lógica para reiniciar la barra lateral a la primera página
                loadEpisodes().then(() => {
                    renderEpisodes();
                });
            };
            // Cargar episodios al inicio
            yield loadEpisodes();
            renderEpisodes();
            const nextButton = document.getElementById('nextButton');
            nextButton.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
                currentPage++;
                if (currentPage > Math.ceil(totalEpisodes / episodesPerPage)) {
                    // Si se supera el número total de páginas, reiniciar a la página 1
                    resetPage();
                }
                else {
                    yield loadEpisodes();
                    renderEpisodes();
                }
            }));
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
