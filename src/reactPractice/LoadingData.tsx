import React, { useEffect, useState } from 'react';
import './ReactPractice.css';
import axios from 'axios';

interface Product {
  id: number;
  title: string;
}

interface DummyData {
  id: number;
  products: Product[];
}

const LoadingData = () => {
  const [dummyData, setDummyData] = useState<DummyData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchingData = async () => {
      const response = await axios('https://dummyjson.com/products');
      const data: DummyData = response.data;
      setDummyData(data);
      setLoading(false);
      console.log(data, data);
    };

    fetchingData();
  }, []);

  return (
    <div className="hooks_container">
      {loading ? (
        'Loading...'
      ) : dummyData && dummyData.products ? (
        <ul>
          {dummyData.products.map((item) => {
            return (
              <li className="text" key={item.id}>
                {item.title}
              </li>
            );
          })}
        </ul>
      ) : (
        'No data  available'
      )}
    </div>
  );
};

export default LoadingData;
