import React from 'react';
import PropTypes from 'prop-types';
import ContactItemStyled from './ContactItemStyled';
import DeleteButtonStyled from './DeleteButtonStyled';

const ContactItem = ({ info: { name, number, id }, onDeleteContact }) => {
  return (
    <ContactItemStyled>
      {name}: {number}
      <DeleteButtonStyled onClick={() => onDeleteContact(id)}>
        Delete
      </DeleteButtonStyled>
    </ContactItemStyled>
  );
};

ContactItem.propTypes = {
  info: PropTypes.objectOf(PropTypes.string).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
