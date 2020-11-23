/* CLIENT SIDE JS */
import axios from 'axios';

console.log('my JS is running');

const select = document.getElementById('dogSelect');
const button = document.getElementById('fetchButton');
const content = document.getElementById('content');

button.addEventListener('click', async function() {
  // get data i need to make request
  let dogId = select.value;
  let url = `/dogs/${dogId}`;

  // AJAX request for specific dog
  // const response = await fetch(url);
  // const data = await response.json();

  // using axios library:
  const data = await axios.get(url);

  // with the response, change the DOM
  content.innerHTML = `
    <h4>${data.name}</h4>
    <img src=${data.image} />
  `;
});
