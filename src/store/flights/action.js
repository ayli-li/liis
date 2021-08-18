import { 
  FETCH_FLIGHTS,
  GET_CAROUSEL_IMAGES,
  SET_FAVORITES_COUNT
} from './constants';

export const fetchFlights = (currentDay) => ({
  type: FETCH_FLIGHTS,
  currentDay
});

export const getCarouselImages = () => ({
  type: GET_CAROUSEL_IMAGES
});

export const setFavorites = (id) => ({
  type: SET_FAVORITES_COUNT,
  id
})