import React, { useEffect, useState } from 'react';
import './ReactPractice.css';
import axios from 'axios';

const DataFetching = () => {
  const [randomId, setRandomId] = useState(1);

  const onBtnClick = () => {
    const randomNumber = Math.floor(Math.random() * 30);
    setRandomId(randomNumber);
    console.log(randomId);
  };

  return (
    <div className="hooks_container">
      <button className="click_button" type="button" onClick={onBtnClick}>
        Generate random post
      </button>
      <FetchingData randomId={randomId} />
    </div>
  );
};

export default DataFetching;

export function FetchingData({ randomId }: { randomId: number }) {
  const [fetchData, setFetchData] = useState('');

  useEffect(() => {
    const controller = new AbortController();

    const myData = async () => {
      const response = await axios(`https://dummyjson.com/posts/${randomId}`, {
        signal: controller.signal,
      });
      const data = response.data;
      setFetchData(data.body);
    };

    myData();

    return () => {
      controller.abort();
    };
  }, [randomId]);

  return (
    <>
      <div>{fetchData}</div>
    </>
  );
}
