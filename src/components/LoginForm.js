import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useLocalStorage } from 'react-use';
import logo from '../images/logo.png'

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
    <div
      className='flex
    flex-col
    align-center
    justify-center
    space-y-4
    '>
      <img src={logo} className='w-36 self-center' />
      <form
        className='flex flex-col align-center justify-center space-y-4'
        onSubmit={handleSubmit}>
        <input
          type='email'
          data-testid='email-input'
          className='input input-bordered bg-gray-50'
          placeholder='Email'
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
        <input
          type='password'
          data-testid='password-input'
          className='input input-bordered bg-gray-50'
          placeholder='Password'
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
        />
        <button
          type='submit'
          data-testid='login-submit-btn'
          className='
          btn
          btn-active
          btn-accent
          text-white
          '
          disabled={
            !(
              email.match(/\S+@\S+\.\S+/i) &&
              password.length > passwordMinLength
            )
          }>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
