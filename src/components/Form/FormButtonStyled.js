import styled from 'styled-components';

const FormButtonStyled = styled.button`
  display: inline-block;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  margin-top: 20px;
  padding: 6px 10px;
  width: 250px;
  background-color: #3f51b5;
  color: #fff;
  font-size: 20px;
  border-radius: 5px;
  &:hover {
    background-color: #303f9f;
  }
`;

export default FormButtonStyled;
