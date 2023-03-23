import styled from 'styled-components';
import Button from '@mui/material/Button';
import { MenuItem, Select } from '@mui/material';


export const FormWrapper = styled.div`
display: flex;
color: rgba(0,0,0,0.8);
border-radius: 8px;
height: 30rem;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 60rem;
padding: 10rem;
background-color: white;
margin: 0 auto;
`;


export const Option = styled(MenuItem)`
  background-color: white;
 
`;

export const SelectContainer = styled(Select)`
  background-color: white;
  margin: 1rem;
  width: 20rem;
  color: black;
  display: flex;
  text-color:black;
  
`;

export const StyledButton = styled(Button)`
  align-self: center;
  font-weight: bold;
  width: 10rem;
  background-color: #0069d9;
  transition: 0.5s;
  color: #fff;
  &:hover {
    backgroun-color: #0069ea;
  }
  &:disabled {
    background-color: rgba(0,0,0,0.3);
    color: rgba(0,0,0,0.6);
    cursor: not-allowed;
    pointer-events: auto;

  }

`;
export const FormLink = styled.a`

 color: inherit;
  text-decoration: none;
`;


export const FormContainer = styled.form`
 display: flex;
 flex-direction: column;
`;
//export const StyledSelect = 
