import {
  GET_CURRENT_USER_REQUESTING,
  GET_CURRENT_USER_SUCCESS,
  GET_ALL_USERS_SUCCESS,
} from "../actionsTypes";

const initialState = {
  users: [],
  currentUser: null,
  loading: true,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_CURRENT_USER_REQUESTING: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_CURRENT_USER_SUCCESS: {
      return {
        ...state,
        currentUser: action.payload.currentUser,
        loading: false
      };
    }
    case GET_ALL_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload
      }
    }
default:
  return state;
}
}