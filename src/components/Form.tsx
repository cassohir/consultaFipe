
import React, { useState, useContext, useEffect } from 'react';
import {  SearchCarContext } from '../contexts/SearchFIPE';
import { FormContainer, FormLink, FormWrapper, Option, SelectContainer, StyledButton } from '../styles/components/form';
import  { SelectChangeEvent } from '@mui/material/Select';
import { ResultProps } from '../contexts/interface';
import { InputLabel } from '@mui/material';
import { MuiSelect } from './Select';

interface Props {
  onDataChanged: (resultado: ResultProps) => void;
}

export function Form({ onDataChanged}: Props) {
  const { marcas, modelos, getModelos, anos, getAnos, query, setCodigoAno, getFipe } = useContext(SearchCarContext);

  const  handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const resultado = await getFipe(query);
    onDataChanged(resultado);
    //router.push(`/result/${}`);
  }
  const [marca, setMarca] = useState<string>('');
  const [modelo, setModelo] = useState<string>('');
  const [ano, setAno] = useState<string>('');
  const [codigoMarca, setCodigoMarca] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  
  const handleChangeMarca = async (event: SelectChangeEvent) => {
    setMarca(event.target.value);   
    setCodigoMarca(event.target.value);
    await getModelos(event.target.value);
  };

  const handleChangeModelo = async (event: SelectChangeEvent) => {
    setModelo(event.target.value); 
    await getAnos(codigoMarca,event.target.value);
  };
  const handleChangeAno = async (event: SelectChangeEvent) => {
    setAno(event.target.value); 
    setCodigoAno(event.target.value);
    setIsDisabled(false);
  };
  
  return (

    <FormWrapper>
    <h1>Tabela Fipe</h1>
    <h3>Consulte o valor de um veículo forma gratuita</h3>
    <FormContainer onSubmit={handleSubmit}>

{/* 
      <MuiSelect title="Marca" value={marca} method={handleChangeMarca} options={marcas} />
      <MuiSelect title="Modelo" value={modelo} method={handleChangeModelo} options={modelos} />

      <InputLabel id="labelMarca">Marca</InputLabel>
 */}  
      <SelectContainer
          id="Marca"
          labelId="labelMarca"
          value={marca}
          label="Marca"
          onChange={handleChangeMarca}
          >
            {marcas.map((marca, key) =>{
              return (
                <Option key= {key} value={marca.codigo}>{marca.nome}</Option>
            )})}
      </SelectContainer>

      <SelectContainer
          id="Modelo"
       
          value={modelo}
          label="Modelo"
          onChange={handleChangeModelo}
          >
          {modelos?.length > 0 && modelos.map((modelo, key) => (
              <Option key={key} value={modelo.codigo}>
              {modelo.nome}
              </Option>))}
      </SelectContainer>
    
        { anos.length > 0  && (
          
      <SelectContainer
          id="Ano"
          value={ano}
          label="Ano"
          onChange={handleChangeAno}
        >
          {anos?.map((ano, key) => (
            <Option key={key} value={ano.codigo}>
             {ano.nome}
            </Option>
      ))}
      </SelectContainer> 
      /*  
      <MuiSelect title="Ano" value={anos} method={handleChangeAno} options={anos} />
      */
      ) 
      }
      <StyledButton type="submit" disabled={isDisabled} onClick={handleSubmit}>
          Consultar preço
      </StyledButton>
    </FormContainer>
    </FormWrapper>
  );
}
