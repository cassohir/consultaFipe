
import React, { useState, useContext, useEffect } from 'react';
import {  SearchCarContext } from '../contexts/SearchFIPE';
import { FormContainer, FormLink, FormWrapper, HeaderContainer, MainContainer, Option, SelectContainer, StyledButton } from '../styles/components/form';
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
    <MainContainer>
    <HeaderContainer>
    <h1>Tabela Fipe</h1>
    <h3>Consulte o valor de um veículo forma gratuita</h3>
    </HeaderContainer> 
    <FormWrapper>
    <FormContainer onSubmit={handleSubmit}>

      <MuiSelect title="Marca" value={marca} method={handleChangeMarca} options={marcas} />
      <MuiSelect title="Modelo" value={modelo} method={handleChangeModelo} options={modelos} />

      { anos.length > 0  && (
      <MuiSelect title="Ano" value={ano} method={handleChangeAno} options={anos} />
      )}

      <StyledButton color="success" type="submit" disabled={isDisabled} onClick={handleSubmit}>
          Consultar preço
      </StyledButton>
    </FormContainer>
    </FormWrapper>
    </MainContainer>
  );
}
