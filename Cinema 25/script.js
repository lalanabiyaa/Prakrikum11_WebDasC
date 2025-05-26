document.getElementById('see-movies').addEventListener('click', function () {
  fetch('Datamovie.json')
    .then(response => response.json())
    .then(data => {
      const container = document.getElementById('movies');
      container.innerHTML = '';

      data.forEach(movie => {
        const card = document.createElement('div');
        card.className = 'movie-card';

        card.innerHTML = `
          <img src="${movie.img}" alt="${movie.title}" />
          <h2>${movie.title}</h2>
          <p>${movie.genre}</p>
        `;

        container.appendChild(card);
      });
    })
    .catch(error => console.error('Gagal memuat data film:', error));
});
