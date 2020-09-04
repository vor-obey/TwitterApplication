import {CREATE_POST} from "../actionsTypes";

export const createPost = (message, userId, userImg, name, email) => ({
  type: CREATE_POST,
  payload: {message, userId, userImg, name, email},
})