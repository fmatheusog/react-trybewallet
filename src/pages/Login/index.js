import React, { useState, useEffect } from 'react';
import './style.css';

const Login = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(true);

  useEffect(() => {
    const isValid = [emailInput, passwordInput].every((input) => input !== '');

    if (isValid === true) setIsLoginButtonDisabled(false);
    else setIsLoginButtonDisabled(true);
  }, [emailInput, passwordInput]);

  return (
    <div id="login-form">
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

    </div>
  );
};

export default Login;
