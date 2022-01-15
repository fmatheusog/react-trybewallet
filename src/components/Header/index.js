import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import './style.css';

const Header = (props) => {
  const { total } = props;

  const email = useSelector((state) => state.user.email);

  return (
    <div className="header">
      <div className="header-main">
        <span className="header-trybe">Trybewallet</span>
        <span data-testid="email-field">
          Olá,
          {' '}
          { email }
        </span>
      </div>
      <div className="header-currency">
        <span data-testid="total-field">{ total.toFixed(2) }</span>
        <span data-testid="header-currency-field">BRL</span>
      </div>
    </div>
  );
};

Header.propTypes = {
  total: PropTypes.number.isRequired,
};

export default Header;
