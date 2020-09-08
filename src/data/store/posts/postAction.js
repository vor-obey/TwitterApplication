import {GET_POSTS_CURRENT_USER, GET_POSTS_REQUESTING, CREATE_POST} from "../actionsTypes";

export const createPost = (message, userId, userImg, name, email) => ({
  type: CREATE_POST,
  payload: {
    message,
    userId,
    userImg,
    name,
    email
  },
})

export const getPosts = () => ({
  type: GET_POSTS_REQUESTING,
})

export const getPostsCurrentUser = (posts) => ({
  type: GET_POSTS_CURRENT_USER,
  posts
})