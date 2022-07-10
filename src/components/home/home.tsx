import React from 'react';
import './home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className='home container'>
        <div className='home__title'>
          <p>HI I'M</p>
          <p>MARIN LUIC</p>
        </div>

        <div className='home__subtitle'>
          <p>I'm a fullstack web developer</p>
          <p>with a passion for UI/UX design</p>
        </div>
      </div>
    );
  }
}

export default Home;
