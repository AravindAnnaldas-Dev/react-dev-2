import React, { useEffect, useState } from 'react';
import './ReactPractice.css';

const CleaningUpFunctions = () => {
  const [counting, setCounting] = useState(0);

  // Clean up the functions or hooks or window objects when we use those
  //   useEffect(() => {
  //     let i = setInterval(() => {
  //       setCount(count + 1);
  //     }, 1000);

  //     return () => clearInterval(i);
  //   }, [count]);

  useEffect(() => {
    setInterval(() => {
      setCounting((prev) => prev + 1);
    }, 1000);
  }, []);

  return <div className="hooks_container">{counting}</div>;
};

export default CleaningUpFunctions;
