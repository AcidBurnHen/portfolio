import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

export default function bgParticles() {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      id='bgparticles'
      init={particlesInit}
      style={{ marginLeft: '7.5rem', width: '90% !important' }}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: 'push',
            },
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 1,
            },
            repulse: {
              distance: 60,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: '#6bffff',
          },
          links: {
            color: '#6bffff',
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: 'none',
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 1000,
            },
            value: 80,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: 'triangle',
          },
          size: {
            value: { min: 2, max: 6 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
