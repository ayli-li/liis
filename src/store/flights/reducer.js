import createReducer from "../../utils/createReducer";
import {
  FETCH_FLIGHTS_SUCCESS,
  GET_CAROUSEL_IMAGES,
  SET_FAVORITES_COUNT
} from "./constants";

const ny1 = require('../../images/ny1.jpg');
const ny2 = require('../../images/ny2.jpg');
const ny3 = require('../../images/ny3.jpg');

const initialState = {
  flightsData: [],
  images: [ny1, ny2, ny3, ny1, ny2, ny3],
  
};

const fetchFlights = (state, flights) => {
  return ({
  ...state,
  flightsData: flights.listFlights
})};

const getCarouselImages = (state) => ({
  ...state,
  images: state.images
});

const setFavorites = (state, { id }) => ({
  ...state,
  flightsData: state.flightsData.map(flight => {
    if(flight.id === id){
      return {
        ...flight,
        isFavorite: flight.isFavorite ? false : true
      }
    }
    return { ...flight }
  })
})

const strategyMap = {
  [FETCH_FLIGHTS_SUCCESS]: fetchFlights,
  [GET_CAROUSEL_IMAGES]: getCarouselImages,
  [SET_FAVORITES_COUNT]: setFavorites,
};

const flightsReducer = createReducer(strategyMap, initialState);

export default flightsReducer;