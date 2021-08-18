import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setFavorites } from '../../store/flights/action';

import './FlightsInfo.css';

export const FlightsInfo = () => {

  const dispatch = useDispatch();

  const flightsData = useSelector(state => state.flights.flightsData);

  const favoritesCount = flightsData.filter((flight) => flight.isFavorite).length;

  const favoritesClickHandle = (id) => {
    dispatch(setFavorites(id));
  }

  return(
    <div className='flights__info'>

      <div className='flights__info-favorites'>Добавлено в Избранное: <span className='flights__info-favorites-count'>{favoritesCount}</span> рейсов</div>

      <div className='flights__info-items'>

        {flightsData[0]?.price ? flightsData.map((flight) => {
          return (
              <div className='flights__info-item'>
                <div className='flights__info-item-plane' ></div>

                <div className='flights__info-item-data'>

                  <div className='flights__info-item-destination'>
                    <span>{flight.from}</span>
                    <div className='flights__info-item-small-arrow' ></div>
                    <span>{flight.to}</span>
                  </div>

                  <div className='flights__info-item-date'>
                    <div>{flight.date}</div>
                    <div className='flights__info-item-date-dash' ></div>
                    <div>20:20</div>
                  </div>
                  <div>{flight.airport}</div>
                </div>

                <div className='flights__info-item-price'>
                  <div className={`flights__info-item-price-heart ${flight.isFavorite ? 'flights__info-item-price-heart_active' : 'flights__info-item-price-heart_disable' }`} onClick={() => favoritesClickHandle(flight.id)} ></div>
                  <div>
                    <span className='flights__info-item-price-name'>Price: </span>
                    <span className='flights__info-item-price-number'>{`${flight.price} ${flight.currency}`}</span>
                  </div>
                </div>
              </div>
          )}) 
          : <div className='flights__info-error'>В выбранный Вами день информация о рейсах не найдена.</div>
        }
      </div>
    </div>
  )
}