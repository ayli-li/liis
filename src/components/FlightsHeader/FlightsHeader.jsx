import React from 'react';

import './FlightsHeader.css';

const today = new Date().toISOString().substring(0, 10);

export const FlightsHeader = ({ localeDate, currentDay, onChange }) => {
  return <div className='flights__card-header'>
        
    <div className='flights__card-heading'>
      <span className='flights__card-heading-name'>Вылеты</span>
      <div className='flights__card-heading-arrow' ></div>
      <span className='flights__card-heading-way'>SVO - JFK</span>
    </div>

    <div className='flights__card-date'> 
      <span>{localeDate}</span>
      <div className='flights__calendar' ></div>

      <form className='flights__form'>            
        <input type='date' name='calendar' value={currentDay} min={today} onChange={(e) => onChange(e)}  />
      </form>
    </div> 
  </div>
}