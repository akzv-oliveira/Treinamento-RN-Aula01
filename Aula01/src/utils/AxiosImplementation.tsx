import React, {useEffect} from 'react';
import api from '../services/api';

export default function Home() {
  const cepFound = '22452-070';

  useEffect(() => {
    getCep();
  }, []);

  const getCep = async () => {
    const {data} = await api.get(`${cepFound}/json/`);
    console.log(data);
  };

  return <></>;
}
