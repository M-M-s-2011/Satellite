let clickCounter = 0;

export const updateCounter = () => {
  clickCounter++;
  return clickCounter;
}

export const reset = () => {
  clickCounter = 0;
  return clickCounter;
}
