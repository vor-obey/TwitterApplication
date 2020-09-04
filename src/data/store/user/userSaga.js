import {put, call} from "redux-saga/effects";
import { GET_CURRENT_USER_REQUESTING, GET_CURRENT_USER_SUCCESS, GET_ALL_USERS_SUCCESS} from "../actionsTypes";
import {getCurrentUser} from "../../../api/userApi/getCurrentUser";
import {getAllUsers} from "../../../api/userApi/getAllUsers";

export function* getCurrentUserSaga() {
  try {
    yield put({type: GET_CURRENT_USER_REQUESTING});
    const [user] = yield call(getCurrentUser);
    console.log(user)
    yield put({type: GET_CURRENT_USER_SUCCESS, payload: {currentUser: user}});
  } catch (e) {
    console.log(e)
  }
}

//--------------------------------------------------------------------------------

export function* getAllUsersSaga() {
  try{
    const users = yield call(getAllUsers)
    yield put({type: GET_ALL_USERS_SUCCESS, payload: users})
  } catch (e) {
    console.log(e)
  }
}

