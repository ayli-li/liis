import React from 'react';
import { useDispatch } from 'react-redux';

import { logOut } from '../../store/auth/action';

import './FlightsPage.css';

import { FlightsLogout } from '../FlightsLogout/FlightsLogout';
import { FlightsCard } from '../FlightsCard/FlightsCard';

export const FlightsPage = () => { 

  const dispatch = useDispatch();  

  const logout = () => dispatch(logOut());  

  return (
    <div className='flights__container'>

      <FlightsLogout onClick={logout} />

      <FlightsCard />
      
    </div>
  )
}