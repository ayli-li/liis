import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { fetchFlights } from '../../store/flights/action';

import { FlightsHeader } from '../FlightsHeader/FlightsHeader';
import { FlightsCarousel } from '../FlightsCarousel/FlightsCarousel';
import { FlightsInfo } from '../FlightsInfo/FlightsInfo';

import './FlightsCard.css';

const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };

export const FlightsCard = () => {

  const [currentDay, setCurrentDay] = useState(new Date().toISOString().substring(0, 10));
  const [localeDate, setLocaleDate] = useState('');    

  const dispatch = useDispatch();  

  useEffect(() => {
   
    const localeCurrentDay = new Date(currentDay).toLocaleDateString('ru-RU', dateOptions);

    setLocaleDate(localeCurrentDay.substring(0, localeCurrentDay.length - 3));

    dispatch(fetchFlights(currentDay));
  }, []);

  const switchCurrentDay = (e) => {
    setCurrentDay(e.target.value);

    const localeCurrentDay = new Date(e.target.value).toLocaleDateString('ru-RU', dateOptions);

    setLocaleDate(localeCurrentDay.substring(0, localeCurrentDay.length - 3));
    
    dispatch(fetchFlights(e.target.value)); 
  }

  return (
    <div className='flights__card'>
      
      <FlightsHeader 
        localeDate={localeDate}
        currentDay={currentDay}  
        onChange={switchCurrentDay} />            

      <FlightsCarousel />

      <FlightsInfo />
    </div>
  )
}