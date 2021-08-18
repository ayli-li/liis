import createReducer from "../../utils/createReducer";
import {
  IS_FORM_VALID,
  LOG_OUT
} from "./constants";

const initialState = {
  isFormValid: Boolean(localStorage.getItem('auth-verification')) || false,
};

const setFormVerification = (state) => ({
  ...state,
  isFormValid: true
});

const logOut = (state) => ({
  ...state,
  isFormValid: false
})

const strategyMap = {
  [IS_FORM_VALID]: setFormVerification,
  [LOG_OUT]: logOut,
};

const authReducer = createReducer(strategyMap, initialState);

export default authReducer;