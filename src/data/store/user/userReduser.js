import {
  GET_ALL_USERS_SUCCESS, SET_USER_ID, IS_LOGIN, CLEAR_STORE, SET_CURRENT_USER_ID, IS_ERROR, CLEAR_ERROR,
} from "../actionsTypes";

const initialState = {
  users: [],
  userId: null,
  loading: true,
  loginStatus: null,
  currentUserInfo: {
    id: null,
    token: null,
  },
  error: null
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

    case SET_CURRENT_USER_ID: {
      return {
        ...state,
        userId: action.payload
      }
    }

    case GET_ALL_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload,
        loading: false
      }
    }

    case IS_ERROR: {
      return {
        ...state,
        error: action.payload
      }
    }
    case CLEAR_ERROR: {
      return {
        ...state,
        error: false
      }
    }

    case CLEAR_STORE: {
      return {
        users: [],
        userId: null,
        loading: true,
        loginStatus: null,
        currentUserInfo: {
          id: null,
          token: null,
        },
        error: null
      }
    }
default:
  return state;
}
}