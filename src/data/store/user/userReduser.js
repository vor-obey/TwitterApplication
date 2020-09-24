import {
  GET_ALL_USERS_SUCCESS,
  SET_USER_ID,
  IS_LOGIN,
  CLEAR_STORE,
} from "../actionsTypes";

const initialState = {
  users: [],
  loading: true,
  loginStatus: null,
  currentUserInfo: {
    id: null,
    token: null,
  }
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {

    case IS_LOGIN: {
      return {
        ...state,
        loginStatus: action.payload
      }
    }

    case SET_USER_ID: {
      return {
        ...state,
        currentUserInfo: {id: action.payload.id, token: action.payload.token}
      }
    }

    case GET_ALL_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    }

    case CLEAR_STORE: {
      return {
        users: [],
        loading: true,
        loginStatus: null,
        currentUserInfo: {
          id: null,
          token: null,
        }
      }
    }
    default:
      return state;
  }
}