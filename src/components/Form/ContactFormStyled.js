import styled from 'styled-components';

const ContactFormStyled = styled.form`
  display: inline-flex;
  flex-direction: column;
  border: 2px solid #000;
  width: 400px;
  padding: 20px;
  margin-bottom: 20px;

  .label {
    font-size: 24px;
  }

  .input {
    margin-bottom: 10px;
    width: 250px;
  }
`;

export default ContactFormStyled;
