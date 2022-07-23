import './styles/HomePage.scss';
import createTyped from '../../utils/createTyped';
import { useEffect } from 'react';

function HomePage() {
  useEffect(() => {
    const typed = createTyped(
      '#home-typed',
      90,
      ['Hello there..', 'my name is', 'Marin Luic'],
      300
    );

    createTyped(
      '#home__subtitle--text',
      30,
      ["I'm a full stack web developer"],
      7400
    );

    createTyped(
      '#home__subtitle--subtext',
      30,
      ['with a passion for UI/UX design'],
      9000
    );

    return () => {
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
