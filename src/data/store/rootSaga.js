import {takeLatest} from "redux-saga/effects"
import {GET_POSTS_REQUESTING, GET_ALL_USERS, GET_CURRENT_USER, CREATE_POST, USER_LOG_OUT} from "./actionsTypes";
import * as userSaga from "./user/userSaga";
import * as postSaga from "./posts/postSaga";

export function* rootSaga() {
  yield takeLatest(GET_CURRENT_USER, userSaga.getCurrentUserSaga);
  yield takeLatest(GET_ALL_USERS, userSaga.getAllUsersSaga);
  yield takeLatest(GET_POSTS_REQUESTING, postSaga.getPostsSaga);
  yield takeLatest(CREATE_POST, postSaga.createPost);
}




