import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { FIPE, Query, ResultProps } from './interface';

export const apiBaseURL = 'https://parallelum.com.br/fipe/api/v1';

interface Props {
  children: React.ReactNode;
}
interface SearchCarConextType {
  marcas: FIPE[];
  getMarcas: () => Promise<void>;
  modelos: FIPE[];
  getModelos: (codigoMarca: string) => Promise<void>;
  anos: FIPE[];
  getAnos: (codigoMarca: String, codigoModelo: string ) => Promise<void>;
  getFipe: (query : Query) => Promise<ResultProps>;
  query: Query;
  setCodigoAno: (codigoAno: string) => void;
}

export const SearchCarContext = createContext({} as SearchCarConextType);

export function SearchCarProvider(props: Props) {
  const [marcas, setMarcas] = useState<FIPE[]>([]);
  const [modelos, setModelos] = useState<FIPE[]>();
  const [anos,setAnos] = useState<FIPE[]>([]);
  const [query, setQuery] = useState<Query>();

  const getMarcas = async () => {
    const res = await axios.get(`${apiBaseURL}/carros/marcas`) 
    setMarcas(res.data);
  }

  const getModelos = async (codigoMarca : string) => {
    setQuery(prevState => ({ ...prevState, codigoMarca }));
    const res = await axios.get(`${apiBaseURL}/carros/marcas/${codigoMarca}/modelos`) 
    setModelos(res.data.modelos);
  }

  const getAnos = async (codigoMarca : string, codigoModelo: string) => {
    setQuery(prevState => ({ ...prevState, codigoModelo }));
    const res = await axios.get(`${apiBaseURL}/carros/marcas/${codigoMarca}/modelos/${codigoModelo}/anos`);
    setAnos(res.data);
  }
  const setCodigoAno = (codigoAno: string ) => {
    setQuery(prevState => ({...prevState, codigoAno}));
  }
  
  const  getFipe = async(query :Query)   => {
    const res  = await axios.get(`${apiBaseURL}/carros/marcas/${query.codigoMarca}/modelos/${query.codigoModelo}/anos/${query.codigoAno}`);
    const newResult: ResultProps = {
      marca: res.data.Marca,
      modelo: res.data.Modelo,
      ano: res.data.AnoModelo,
      valor: res.data.Valor
    };
   return newResult;
  }
  useEffect(() => {
    getMarcas();
  }, []);


  return (
    <SearchCarContext.Provider value={{ getMarcas, marcas, modelos, getModelos, anos, getAnos, getFipe, query, setCodigoAno }}>
      {props.children}
    </SearchCarContext.Provider>
  );
}
