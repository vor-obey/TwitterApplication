import {combineReducers} from "redux";
import {userReducer} from "./user/userReduser";
import {postReducer} from "./posts/postReducer";

export const rootReducer = combineReducers({
  users: userReducer,
  posts: postReducer
})