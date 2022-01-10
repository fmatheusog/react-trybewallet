import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './style.css';

import { loginAction } from '../../actions';

const Login = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(true);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const SIX = 6;
    const isValid = [emailInput, passwordInput].every((input) => input.length >= SIX);

    if (isValid === true) setIsLoginButtonDisabled(false);
    else setIsLoginButtonDisabled(true);
  }, [emailInput, passwordInput]);

  return (
    <form
      id="login-form"
      onSubmit={ () => {
        dispatch(loginAction(emailInput));
        history.push('/carteira');
      } }
    >
      <div className="login-inputs">
        <h3>Trybewallet - Login</h3>
        <label htmlFor="email-input">
          E-mail:
          <input
            type="text"
            id="email-input"
            data-testid="email-input"
            value={ emailInput }
            onChange={ (e) => setEmailInput(e.target.value) }
          />
        </label>

        <label htmlFor="password-input">
          Password:
          <input
            type="password"
            id="password-input"
            data-testid="email-input"
            value={ passwordInput }
            onChange={ (e) => setPasswordInput(e.target.value) }
          />
        </label>

        <button
          type="submit"
          disabled={ isLoginButtonDisabled }
        >
          Login
        </button>
      </div>

    </form>
  );
};

export default Login;
