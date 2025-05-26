fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const menuContainer = document.getElementById('menu');

    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <h2>${item.name}</h2>
        <p>${item.description}</p>
        <p>${item.price}</p>
      `;

      menuContainer.appendChild(card);
    });
  })
  .catch(error => console.error('Gagal memuat data:', error));
