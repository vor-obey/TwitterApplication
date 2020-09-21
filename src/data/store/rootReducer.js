import {combineReducers} from "redux";
import {userReducer} from "./user/userReduser";
import {postReducer} from "./posts/postReducer";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";

const userInfoPersistConfig = {
  key: "root",
  storage,
  whitelist: ["currentUserInfo"]
}

const rootReducer = combineReducers({
  users: persistReducer(userInfoPersistConfig, userReducer),
  posts: postReducer
})

export default rootReducer;