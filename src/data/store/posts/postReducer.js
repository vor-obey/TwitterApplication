import {
  CLEAR_STORE,
  CREATE_POST_SUCCESS,
  GET_POSTS_CURRENT_USER,
  GET_POSTS_REQUESTING,
  GET_POSTS_SUCCESS
} from "../actionsTypes";

const initialState = {
  posts: [],
  postsCurrentUser: [],
  loading: null
}

export const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_POST_SUCCESS: {
      return {
        ...state,
        posts: action.payload.posts,
      }
    }

    case GET_POSTS_REQUESTING: {
      return {
        ...state,
        loading: true
      }
    }

    case GET_POSTS_SUCCESS: {
      return {
        ...state,
        posts: action.payload.posts,
        loading: false
      }
    }

    case GET_POSTS_CURRENT_USER: {
      return {
        ...state,
        postsCurrentUser: action.posts
      }
    }

    case CLEAR_STORE: {
      return {
        posts: [],
        postsCurrentUser: [],
        loading: null
      }
    }
    default:
      return state;
  }
}