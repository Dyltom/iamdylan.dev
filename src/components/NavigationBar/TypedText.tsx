import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText: React.FC = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Dylan Henderson', 'DH'],
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 300,
      smartBackspace: true,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span ref={el} />;
};

export default TypedText;
