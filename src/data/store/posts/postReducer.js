import {CREATE_POST_REQUEST, GET_ALL_POSTS_SUCCESS} from "../actionsTypes";


const initialState = {
  posts: [],
  loading: false
}
export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }

    case GET_ALL_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.payload.posts,
        loading: false
      }
    }
    default:
      return state;
  }
}