import createReducer from "../../utils/createReducer";
import {
  IS_FORM_VALID
} from "./constants";

const initialState = {
  isFormValid: Boolean(localStorage.getItem('auth-verification')) || false,
};

const setFormVerification = (state) => ({
  ...state,
  isFormValid: true
});

const strategyMap = {
  [IS_FORM_VALID]: setFormVerification,
};

const authReducer = createReducer(strategyMap, initialState);

export default authReducer;