import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setFormVerification } from '../../store/auth/action';

export const AuthPage = () => {

  const [email, setEmail] = useState('1@mail.ru');
  const [password, setPassword] = useState('11111111');
  const [emailVisited, setEmailVisited] = useState(false);
  const [passwordVisited, setPasswordVisited] = useState(false);
  const [emailError, setEmailError] = useState('Необходимо ввести электронную почту');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect( () => {
    (emailError || passwordError) ? setIsFormValid(false) : setIsFormValid(true);

  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if (!re.test(String(e.target.value))) {
      setEmailError('Неверный адрес электронной почты');
    } else {
      setEmailError('');
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    console.log(e.target.value.length)
    const re = /^[^а-яё]+$/iu;
    if (!re.test(String(e.target.value).toLowerCase()) || e.target.value.length < 8) {
      setPasswordError('В пароле должно быть минимум 8 символов, без кириллицы')
    } else {
      setPasswordError('');
    }
  }

  const blurHandler = (e) => {
    if (e.target.name === 'email') {
      setEmailVisited(true);
    }

    if (e.target.name === 'password') {
      setPasswordVisited(true);
    }
  }

  const signIn = (e) => {
    e.preventDefault();

    if (isFormValid) {
      dispatch(setFormVerification());
      console.log(321);
    }
  }

  return (
    <div>
      <h1>Simple Flight Check</h1>
      <form>
        <label htmlFor='email_input'>Логин:</label>

        {(emailVisited && emailError) && <div>{emailError}</div>}

        <input type='email' name='email' id='email_input' onChange={(e) => emailHandler(e)} onBlur={(e) => blurHandler(e)} value={email} />

        <label htmlFor='password_input'>Пароль:</label>

        {(passwordVisited && passwordError) && <div>{passwordError}</div>}

        <input type='password' name='password' id='password_input' onChange={(e) => passwordHandler(e)} onBlur={(e) => blurHandler(e)} value={password} />

        <button type='submit' disabled={!isFormValid} onClick={signIn}>Войти</button>
      </form>
    </div>
  )
}