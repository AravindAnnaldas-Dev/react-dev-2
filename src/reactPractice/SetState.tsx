import React, { useState } from 'react';
import './ReactPractice.css';

const SetState = () => {
  const [count, setCount] = useState(0);

  const onClickToIncreaseCount = () => {
    // Having multiple of these which will increase the multiple times
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);

    // Having multiple of these which will not increase
    // setCount(count + 1);
  };

  return (
    <div className="hooks_container">
      <h1>{count}</h1>
      <button
        type="button"
        className="click_button"
        onClick={onClickToIncreaseCount}
      >
        Count Increase
      </button>
    </div>
  );
};

export default SetState;
