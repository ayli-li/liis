import { IS_FORM_VALID, LOG_OUT } from './constants';

export const setFormVerification = () => ({
  type: IS_FORM_VALID
})
 
export const logOut = () => {
  localStorage.removeItem('auth-verification');
  return ({
    type: LOG_OUT
  })
}