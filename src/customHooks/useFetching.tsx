import { useEffect, useState } from 'react';
import axios from 'axios';

export function useFetching(url: string) {
  const [data, setData] = useState<[] | null>(null);
  const [loading, setLoading] = useState(true);

  const dataFetch = async () => {
    const response = await axios(url);
    const data = response.data;
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    dataFetch();
  }, []);

  return [data, loading];
}
