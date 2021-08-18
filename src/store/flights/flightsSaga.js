import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { nanoid } from 'nanoid';

import { 
  FETCH_FLIGHTS,
  FETCH_FLIGHTS_SUCCESS
} from './constants';

const fillArray = (value, count) => {
  const result = [];

  for (let i = 0; i < count; i++){
    result.push(value)
  }

  return result;
}

function* fetchFlightsSaga(action) {
  const getFlights = () => {
   return axios({
      method: 'GET',
      url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/RU/RUB/en-EN/SVO-sky/JFK-sky/${action.currentDay}`,
      params: {inboundpartialdate: 'anytime'},
      headers: {
        'x-rapidapi-key': '9e7c53efa2mshde99a7dd7531a43p152bbcjsn3c792405c63d',
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
      }
    })
  }

  try {
    const response = yield call(getFlights);
    const data = response.data;

    const newData = {
      price: data.Quotes[0]?.MinPrice,
      currency: data.Currencies[0]?.Symbol,
      from: `${data.Places[1]?.CityName} (${data.Places[1]?.IataCode})`,
      to: `${data.Places[0]?.CityName} (${data.Places[0]?.IataCode})`,
      date: action.currentDay,
      airport: data.Carriers[0]?.Name,
    };

    const listFlights = fillArray(newData, 28).map(flights => {
      return {
        ...flights,
        isFavorite: false,
        id: nanoid(),
      }
    });

    yield put({ type: FETCH_FLIGHTS_SUCCESS, listFlights })
  } catch (e) {
    console.log(e);
  }
}

export const flightsSagas = [
  takeEvery(FETCH_FLIGHTS, fetchFlightsSaga)
]