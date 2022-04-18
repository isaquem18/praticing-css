
window.addEventListener('load', function load() {
  const url = 'https://fakestoreapi.com/products';


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

      json.forEach(item => {

        root.innerHTML += `

        <div style="width: 300px; padding: 20px 20px; border: 1px solid #000; margin: 10px; display: flex; flex-direction: column; justify-content: center;">
          <img src="${item.image}" style="width: 100px; margin-bottom: 20px;">
          <span>${item.title}</span>
        </div>`;

      })

    });
});

