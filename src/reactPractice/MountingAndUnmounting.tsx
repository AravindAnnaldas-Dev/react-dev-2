import React, { useEffect, useState } from 'react';
import './ReactPractice.css';

const MountingAndUnmounting = () => {
  // In a component having of hooks or eventListeners or timeFunctions and this component is not used better to unMount the component(cleaning up the functions and all)
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

  return <div className="hooks_container">{reSize}</div>;
};

export default MountingAndUnmounting;
