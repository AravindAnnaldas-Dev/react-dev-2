import React, { useState } from 'react';
import './ReactPractice.css';

const PrimitiveAndNonPrimitive = () => {
  console.log('Hello World!');
  // For primitive types if value is same component doesn't re-render
  // const [data, setData] = useState('1');

  // For non-primitive if values are same too component will re-render
  const [data, setData] = useState({ name: 'aravind' });

  const onHandleClick = () => {
    setData({ name: 'aravind' });
  };

  return (
    <div className="hooks_container">
      <p className="text">{JSON.stringify(data)}</p>
      <button className="click_button" type="button" onClick={onHandleClick}>
        Click
      </button>
    </div>
  );
};

export default PrimitiveAndNonPrimitive;
