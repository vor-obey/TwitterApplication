import {put, call} from "redux-saga/effects"
import {CREATE_POST_SUCCESS, GET_POSTS_SUCCESS} from "../actionsTypes";
import {getCurrentPost} from "../../../api/postsApi/getCurrentPost";
import {getAllPosts} from "../../../api/postsApi/getAllPosts";

export function* createPost(action) {
  try {
    yield call(
      getCurrentPost,
      action.payload.userId,
      action.payload.message,
      action.payload.userImg,
      action.payload.name,
      action.payload.email,
    );
    const allPosts = yield call(getAllPosts);
    yield put({type: CREATE_POST_SUCCESS, payload: {posts: allPosts}})
  } catch (e) {
    console.log(e)
  }
}


export function* getPostsSaga() {
  const allPosts = yield call(getAllPosts);
  yield put ({type: GET_POSTS_SUCCESS, payload: {posts: allPosts}})
}


