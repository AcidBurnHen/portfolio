import './styles/HomePage.scss';
import Typed from 'typed.js';
import { useEffect } from 'react';

/* Created a reusable function to create new typed text, might move this to utilities 
if it will be needed in more places on the website */
function createTyped(element: string, typeSpeed: number, strings: string[]) {
  const options = {
    strings,
    startDelay: 300,
    typeSpeed,
    backSpeed: 20,
    showCursor: false,
  };

  return new Typed(element, options);
}

function HomePage() {
  useEffect(() => {
    const typed = createTyped('#home-typed', 90, [
      'Hello there..',
      'my name is',
      'Marin Luic',
    ]);

    const timerText = setTimeout(() => {
      createTyped('#home__subtitle--text', 30, [
        "I'm a full stack web developer",
      ]);

      setTimeout(() => {
        createTyped('#home__subtitle--subtext', 30, [
          'with a passion for UI/UX design',
        ]);
      }, 1600);
    }, 7400);

    return () => {
      clearTimeout(timerText);
      typed.destroy();
    };
  }, []);

  return (
    <div className='home container'>
      <div className='home__title'>
        <p id='home-typed'></p>
      </div>

      <div className='home__subtitle'>
        <p id='home__subtitle--text'></p>
        <p id='home__subtitle--subtext'></p>
      </div>
    </div>
  );
}

export default HomePage;
