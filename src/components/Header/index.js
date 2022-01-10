import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const email = useSelector((state) => state);

  return (
    <div>
      <span>Trybe</span>
      <span data-testid="email-field">{ email }</span>
    </div>
  );
};

export default Header;
