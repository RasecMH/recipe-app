import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocalStorage } from 'react-use';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const [, setEmailToLS] = useLocalStorage('user');
  const [, setMealTokenToLS] = useLocalStorage('mealsToken');
  const [, setDrinkTokenLS] = useLocalStorage('cocktailsToken');
  const passwordMinLength = 6;

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailToLS({ email });
    setMealTokenToLS(1);
    setDrinkTokenLS(1);
    history.push('/foods');
  };
  return (

    <form onSubmit={ handleSubmit }>
      <input
        type="email"
        data-testid="email-input"
        value={ email }
        onChange={ ({ target: { value } }) => setEmail(value) }
      />
      <input
        type="password"
        data-testid="password-input"
        value={ password }
        onChange={ ({ target: { value } }) => setPassword(value) }
      />
      <button
        type="submit"
        data-testid="login-submit-btn"
        disabled={ !(email.match(/\S+@\S+\.\S+/i)
            && password.length > passwordMinLength) }
      >
        Login

      </button>
    </form>
  );
};

export default LoginForm;
