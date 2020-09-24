import {GET_ALL_USERS, SET_USER_ID, IS_LOGIN, CLEAR_STORE} from "../actionsTypes";

export const getAllUsers = () => ({
  type: GET_ALL_USERS,
})

export const setUserId = (id, token) => ({
  type: SET_USER_ID,
  payload: {id, token}
})

export const isLogin = value => ({
  type: IS_LOGIN,
  payload: value
})

export const clearStore = () => ({
  type: CLEAR_STORE
})
