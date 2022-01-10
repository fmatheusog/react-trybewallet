import React, { useState, useEffect } from 'react';
import './style.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoginButtonDisabled, setIsLoginButtonDisabled] = useState(true);

  useEffect(() => {
    const isValid = [email, password].every((input) => input !== '');

    if (isValid === true) setIsLoginButtonDisabled(false);
    else setIsLoginButtonDisabled(true);
  }, [email, password]);

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
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>

        <label htmlFor="password-input">
          Password:
          <input
            type="password"
            id="password-input"
            data-testid="email-input"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
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
