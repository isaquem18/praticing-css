
import { loading } from './loading.js';

window.addEventListener('load', function load() {
  const url = 'https://fakestoreapi.com/products';

  loading()

  const headers = new Headers({
    "Content-Type": "application/json",
    "accept": "application/json"
  });

  const request = new Request(url, {
    method: 'GET',
    headers
  });

  fetch(request)
    .then(promise => promise.json())
    .then(json => {

      const root = document.getElementById('root');
      root.innerHTML = ``;

      json.forEach(item => {

        root.innerHTML += `

        <div style="width: 100%; height: 100%; padding: 20px 20px; border: 1px solid #000; margin: 10px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <img src="${item.image}">
          <span>${item.title}</span>
        </div>`;

      })

    });
});

