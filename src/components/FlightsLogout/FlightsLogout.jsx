import React from 'react';

import './FlightsLogout.css';

export const FlightsLogout = ({ onClick }) => {  

  return (
    <div className='flights__logout' onClick={onClick}>
      <div>Выйти</div>
      <div className='flights__logout_logo' ></div>
    </div>
  )
}