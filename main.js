// API key y URL de la API de NewsAPI
let apiKey = 'e9dc2d7acb704304836c440bd1d02b7a';
let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;

// Obtener el elemento donde se mostrarán las noticias
let mostrarNoticias = document.getElementById('noticias');

// Realizar la solicitud a la API y mostrar las noticias
fetch(url)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    let noticias = data.articles;

    noticias.map(function (numero) {
      let div = document.createElement('div');
      let img = document.createElement('img');
      img.style.maxWidth = '500px';
      img.src = numero.urlToImage;

      let container = document.createElement('div');
      container.className = 'container2';

      let h1 = document.createElement('h1');
      h1.textContent = numero.title;

      let h2 = document.createElement('h2');
      h2.textContent = `Description: ${numero.description}`;
      h2.style.display = 'none'; // Ocultar la descripción inicialmente

      let h3 = document.createElement('h3');
      h3.textContent = `Author: ${numero.author}`;
      h3.style.display = 'none'; // Ocultar el autor inicialmente

      // Agregar evento de mouseover a la imagen
      img.addEventListener('mouseover', function () {
        h2.style.display = 'block'; // Mostrar la descripción al colocar el mouse sobre la imagen
        h3.style.display = 'block'; // Mostrar el autor al colocar el mouse sobre la imagen
        img.style.transform = 'scale(1.1)'; // Aplicar el efecto de escala a la imagen
      });

      // Agregar evento de mouseout a la imagen
      img.addEventListener('mouseout', function () {
        h2.style.display = 'none'; // Ocultar la descripción al quitar el mouse de la imagen
        h3.style.display = 'none'; // Ocultar el autor al quitar el mouse de la imagen
        img.style.transform = 'scale(1)'; // Restaurar el tamaño original de la imagen
      });

      container.appendChild(h1);
      container.appendChild(h2);
      container.appendChild(h3);

      div.appendChild(img);
      div.appendChild(container);

      mostrarNoticias.appendChild(div);
    });
  })
  .catch((error) => {
    console.log(error);
  });
//
//