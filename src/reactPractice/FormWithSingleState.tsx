import React, { useState } from 'react';
import './ReactPractice.css';

const FormWithSingleState = () => {
  const [form, setForm] = useState({
    FirstName: '',
    LastName: '',
    Contact: '',
    Email: '',
    Password: '',
  });

  const onInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  console.log(form);

  return (
    <div className="hooks_container">
      <input
        className="input_field"
        type="text"
        name="FirstName"
        onChange={onInputChangeHandler}
        placeholder="FirstName"
      />
      <input
        className="input_field"
        type="text"
        name="LastName"
        onChange={onInputChangeHandler}
        placeholder="LastName"
      />
      <input
        className="input_field"
        type="tel"
        name="Contact"
        onChange={onInputChangeHandler}
        placeholder="Contact"
      />
      <input
        className="input_field"
        type="email"
        name="Email"
        onChange={onInputChangeHandler}
        placeholder="Email"
      />
      <input
        className="input_field"
        type="password"
        name="Password"
        onChange={onInputChangeHandler}
        placeholder="Password"
      />
      <button className="click_button" type="button">
        Submit
      </button>
    </div>
  );
};

export default FormWithSingleState;
