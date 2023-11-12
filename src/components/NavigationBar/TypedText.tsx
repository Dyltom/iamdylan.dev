import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

const TypedText: React.FC = () => {
  const el = useRef(null);
  const commonPrefix = '[dh ~/'; // Define a common prefix
  const [hashPath, setHashPath] = useState('');
  const [typedStrings, setTypedStrings] = useState([
    `${commonPrefix}${hashPath}]$`,
  ]);

  useEffect(() => {
    const updateHashPath = () => {
      const newHashPath = window.location.hash.replace(/^#/, '') || '';
      setHashPath(newHashPath);
      const newTypedString = `${commonPrefix}${newHashPath}]$`;
      setTypedStrings([newTypedString]); // Update string with the common prefix
      console.log('Updated Typed String:', newTypedString); // Debugging log
    };

    updateHashPath();
    window.addEventListener('hashchange', updateHashPath);

    return () => {
      window.removeEventListener('hashchange', updateHashPath);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const typed = new Typed(el.current, {
      strings: typedStrings,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 300,
      smartBackspace: true, // Ensure this is set to true
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, [typedStrings]);

  return <span ref={el} />;
};

export default TypedText;
