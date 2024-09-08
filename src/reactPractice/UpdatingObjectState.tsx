import React, { useState } from 'react';
import './ReactPractice.css';

const UpdatingObjectState = () => {
  const [user, setUser] = useState<{
    name: string;
    place?: string;
    age?: number;
  }>({ name: '', place: '', age: 20 });

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    // setUser({ ...user, name: e.target.value });
    setUser((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  };

  console.log(user);

  return (
    <div className="hooks_container">
      <div>UpdatingObjectState</div>
      <input
        type="text"
        className="input_field"
        // onChange={onInputChangeHandler}
        onChange={(e) => onInputChangeHandler(e)}
      />
    </div>
  );
};

export default UpdatingObjectState;
