import {put, call} from "redux-saga/effects";
import {GET_ALL_USERS_SUCCESS} from "../actionsTypes";
import {getAllUsers} from "../../../api/userApi/getAllUsers";

//--------------------------------------------------------------------------------

export function* getAllUsersSaga() {
  try {
    const users = yield call(getAllUsers)
    yield put({type: GET_ALL_USERS_SUCCESS, payload: users})
  } catch (e) {
    console.log(e)
  }
}

