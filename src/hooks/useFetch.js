import { useState, useEffect } from 'react';
import axios from 'axios';

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        const res = await axios.get(url);
        setData(res?.data?.data);
      } catch (error) {
        setError(error?.response?.data?.msg);
        console.log(error.response.data.msg);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [url]);

  return { data, isLoading, error };
}
