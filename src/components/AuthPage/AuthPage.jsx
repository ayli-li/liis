import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFormVerification } from '../../store/auth/action';

import './AuthPage.css';

export const AuthPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useDispatch();

  useEffect( () => {
    (emailError || passwordError) ? setIsFormValid(false) : setIsFormValid(true);

  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!re.test(String(e.target.value))) {
      e.target.classList.add('auth__form-error');
      e.target.parentNode.classList.add('auth__form-error');
      setEmailError('Неверный адрес электронной почты');
    } else {
      setEmailError('');
      e.target.classList.remove('auth__form-error');
      e.target.parentNode.classList.remove('auth__form-error');
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    const re = /^[^а-яё]+$/iu;
    if (!re.test(String(e.target.value).toLowerCase()) || e.target.value.length < 8) {
      setPasswordError('В пароле должно быть минимум 8 символов, без кириллицы');
      e.target.classList.add('auth__form-error');
      e.target.parentNode.classList.add('auth__form-error');
    } else {
      setPasswordError('');
      e.target.classList.remove('auth__form-error');
      e.target.parentNode.classList.remove('auth__form-error');
    }
  }

  const signIn = (e) => {
    e.preventDefault();

    if (isFormValid) {
      dispatch(setFormVerification());
    }
  }

  return (
    <div className='container'  >
      <div className='auth'>
        <div className='auth__heading'>Simple Flight Check</div>
        <form className='auth__form'>
          <div className='auth__form-item'>
            <label className='auth__form-label' htmlFor='email_input'>Логин:</label>            

            <input className='auth__form-input' type='email' name='email' id='email_input' onChange={(e) => emailHandler(e)} value={email} />

            { emailError && <div className='auth__form-error-message auth__form-error-message_email'>{emailError}</div> }
              
          </div>

          <div className='auth__form-item'>
            <label className='auth__form-label' htmlFor='password_input'>Пароль:</label>            

            <input className='auth__form-input' type='password' name='password' id='password_input' onChange={(e) => passwordHandler(e)} value={password} />

            { passwordError && <div className='auth__form-error-message auth__form-error-message_password'>{passwordError}</div> }
          </div>

          <button className='auth__form-button' type='submit' disabled={!isFormValid} onClick={signIn}>Войти</button>
        </form>
      </div>
    </div>
  )
}