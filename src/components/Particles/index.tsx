'use client';

import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import { Engine, ISourceOptions } from 'tsparticles-engine';

const ParticleBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  const options: ISourceOptions = {
    fullScreen: true,
    fpsLimit: 60,
    particles: {
      number: {
        value: 5,
      },
      color: {
        value: '#32CD32',
      },
      links: {
        enable: true,
        color: '#32CD32', // Neon green color
        distance: 150,
      },
      move: {
        enable: true,
        speed: 1.5,
      },
    },
  };

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
};

export default ParticleBackground;
