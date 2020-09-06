import {GET_CURRENT_USER, GET_ALL_USERS} from "../actionsTypes";

export const getCurrentUser = () => ({
  type: GET_CURRENT_USER
})

export const getAllUsers = () => ({
  type: GET_ALL_USERS,
})
