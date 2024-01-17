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

import {Episode} from "./interfaces/episodes";
import {Character} from "./interfaces/characters";
import {Location} from "./interfaces/locations";

async function displayInfo() {
  try {
    const data = await fetch("https://rickandmortyapi.com/api/episode")
    const JSONdata = await data.json();
    console.log(JSONdata);
  } catch (error) {
  
  }
}

displayInfo()

const episodeList = document.getElementById('episode-list');

JSONdata.forEach(episode) => {
  const episodeList = `
  <ul>
  <li>${api.episode}</li>
  </ul>
  `
}

