import {takeLatest} from "redux-saga/effects"
import {CREATE_POST, GET_ALL_USERS, GET_CURRENT_USER} from "./actionsTypes";
import * as userSaga from "./user/userSaga";
import * as postSaga from "./posts/postSaga";

export function* rootSaga() {
  yield takeLatest(GET_CURRENT_USER, userSaga.getCurrentUserSaga);
  yield takeLatest(CREATE_POST, postSaga.createPost);
  yield takeLatest(GET_ALL_USERS, userSaga.getAllUsersSaga);
}




