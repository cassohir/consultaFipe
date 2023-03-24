import styled from 'styled-components';
import Button from '@mui/material/Button';
import { MenuItem, Select } from '@mui/material';





export const FormWrapper = styled.div`
display: flex;
border-radius: 8px;
max-height: 25rem;
flex-direction: column;
justify-content: start;
align-items: center;
width: 32rem;
padding: 1rem;
background-color: white;
box-shadow: 2px 2px 2px rgba(0,0,0,0.1);
margin: 0 auto;

`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: rgba(0,0,0,0.8);
  h3 {
    margin: 0.5rem auto;
    font-size: 1.8rem;
  }
`;


export const Option = styled(MenuItem)`
  background-color: white;
`;

export const SelectContainer = styled(Select)`
  width: 25rem;    
  background: white;
`;

export const StyledButton = styled(Button)`
  align-self: center;
  font-weight: bold;
  width: 10rem;
  background-color: #0069d9;
  transition: 0.3s;
  margin-bottom: 1rem;
  color: #fff;
  &:hover {
    
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
 justify-content: center;
 gap: 1.5rem;
 margin-top: 2rem;
 
`;


export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
