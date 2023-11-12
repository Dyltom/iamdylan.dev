'use client';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

const TypedText: React.FC = () => {
  const el = useRef(null);
  const pathname = usePathname(); // Using usePathname to get the current pathname
  const [typed, setTyped] = useState<Typed | null>(null);

  useEffect(() => {
    console.log('pathname', pathname);
    if (typed) {
      typed.destroy();
    }

    const newTyped = new Typed(el.current, {
      strings: [`[dh ~${pathname}]$`], // Dynamically using the pathname
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 1000,
      startDelay: 300,
      smartBackspace: true,
      showCursor: false,
    });

    setTyped(newTyped);

    return () => {
      newTyped.destroy();
    };
  }, [pathname]); // Dependency on pathname

  return <span ref={el} />;
};

export default TypedText;
