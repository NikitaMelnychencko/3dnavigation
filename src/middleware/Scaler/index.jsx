"use client"
import { useEffect, useState } from 'react';

const Scaler = ({ setSize, children }) => {
  const [sizes, setSizes] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    setSizes(window.innerWidth);
    setSize(window.innerWidth);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [sizes]);

  const onResize = e => {
    setSizes(e.target.innerWidth);
    setSize(e.target.innerWidth);
  };
  return <>{children}</>;
};
export default Scaler