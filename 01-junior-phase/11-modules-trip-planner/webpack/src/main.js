import {updateCounter, reset} from './game';

const clickMeButton = document.getElementById('clickme');
const resetButton = document.getElementById('reset');
const clickCounter = document.getElementById('click-counter');

clickMeButton.addEventListener('click', () => {
  let count = updateCounter();
  clickCounter.innerText = count;
});
