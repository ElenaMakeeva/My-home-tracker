import { types } from "../types/userTypes"


const defaultState = {
  auth: false,
  modale: false
}

export const authReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.AUTH_USER:
      return {...state, auth: action.payload, _user: undefined};
    case types.SIGN_UP_USER:
      return {...state, _user: action.payload};
    // case types.SIGN_UP_AUTH:
    //   return {...state, auth: action.payload, _user: undefined};
    case types.OPEN_MODALE:
      return {...state, modale: action.payload};
    default:
      return state;
    }
  }
