import Typed from 'typed.js';

export default function createTyped(
  element: string,
  typeSpeed: number,
  strings: string[],
  startDelay: number
) {
  const options = {
    strings,
    startDelay,
    typeSpeed,
    backSpeed: 20,
    showCursor: false,
  };

  return new Typed(element, options);
}
