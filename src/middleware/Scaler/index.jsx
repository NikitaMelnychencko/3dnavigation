"use client"
import { useEffect, useState } from 'react';

const Scaler = ({ setSize, children }) => {
  const [sizes, setSizes] = useState(0);

  useEffect(() => {
    window.addEventListener('resize', onResize);
    setSizes(window.outerWidth);
    setSize(window.outerWidth);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [sizes]);

  const onResize = e => {
    console.log(e.target.outerWidth);
    setSizes(e.target.outerWidth);
    setSize(e.target.outerWidth);
  };
  return <>{children}</>;
};
export default Scaler