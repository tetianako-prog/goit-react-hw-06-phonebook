import styled from 'styled-components';

const DeleteButtonStyled = styled.button`
  display: inline-block;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: none;
  margin-left: 20px;
  padding-right: 8px;
  padding-left: 8px;
  font-size: 14px;
  background-color: #dcdcdc;
  border: 1px solid #696969;
  border-radius: 5px;
  &:hover {
    background-color: #808080;
    color: #fff;
  }
`;

export default DeleteButtonStyled;
