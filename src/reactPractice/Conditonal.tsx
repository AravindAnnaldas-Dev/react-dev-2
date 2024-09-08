import React from 'react';

const Conditonal = ({ themeMode }: { themeMode: boolean }) => {
  return <>{themeMode ? <h1>lightMode</h1> : <h1>darkMode</h1>}</>;
};

export default Conditonal;
