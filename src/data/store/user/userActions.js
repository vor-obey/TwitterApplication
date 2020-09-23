import {GET_ALL_USERS, SET_USER_ID, IS_LOGIN, CLEAR_STORE, SET_CURRENT_USER_ID, IS_ERROR, CLEAR_ERROR} from "../actionsTypes";

export const getAllUsers = () => ({
  type: GET_ALL_USERS,
})

export const setCurrentUserId = (id) => ({
  type: SET_CURRENT_USER_ID,
  payload: id
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

export const isError = (value) => ({
  type: IS_ERROR,
  payload: value
})

export const clearError = () => ({
  type: CLEAR_ERROR,
})