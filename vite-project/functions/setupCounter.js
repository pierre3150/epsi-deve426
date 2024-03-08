import { clamp } from "../functions/clamp";

export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = clamp(count, 0, 10);
    element.innerHTML = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(counter + 1));
  setCounter(0);
}
