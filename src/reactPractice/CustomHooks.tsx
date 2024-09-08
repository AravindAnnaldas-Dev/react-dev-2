import React, { useEffect, useState } from 'react';
import './ReactPractice.css';

// This is custom hook
const useCustomHook = () => {
  const [reSize, setReSize] = useState<number>();

  useEffect(() => {
    const onResizeHandler = () => {
      setReSize(window.innerWidth);
    };
    window.addEventListener('resize', onResizeHandler);

    return () => {
      window.removeEventListener('resize', onResizeHandler);
    };
  }, []);

  return reSize;
};

const CustomHooks = () => {
  const windowSize = useCustomHook();
  return <div className="hooks_container">{windowSize}</div>;
};

export default CustomHooks;
