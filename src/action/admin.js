import getPageApi, {
  addInfoApi,
  deleteInfoApi,
  getMusicalData,
  updateInfoApi,
} from "api/adminApi";
import { all, call, put, take, fork, select } from "redux-saga/effects";

// define types
export const types = {
  REQUEST_PAGELIST: "admin/REQUEST_PAGELIST",
  SET_PAGELIST: "admin/SET_PAGELIST",
  REQUEST_CURINFO: "admin/REQUEST_CURINFO",
  SET_CURINFO: "admin/SET_CURINFO",
  ADD_INFO: "admin/ADD_INFO",
  UPDATE_INFO: "admin/UPDATE_INFO",
  DELETE_INFO: "admin/DELETE_INFO",
  SET_CURPAGE: "admin/SET_CURPAGE",
  SET_MAXPAGE: "admin/SET_MAXPAGE",
  SET_DELETIONLIST: "admin/SET_DELETIONLIST",
  ADD_DELETIONLIST: "admin/ADD_DELETIONLIST",
  REMOVE_DELETIONLIST: "admin/REMOVE_DELETIONLIST",
  SET_CATEGORY: "admin/SET_CATEGORY",
};

//define actions
export const actions = {
  requestPageList: (data) => ({
    type: types.REQUEST_PAGELIST,
    data,
  }),
  requestCurInfo: (targetId) => ({
    type: types.REQUEST_CURINFO,
    targetId,
  }),
  setCurInfo: (curInfo) => ({
    type: types.SET_CURINFO,
    curInfo,
  }),
  addInfo: (info) => ({
    type: types.ADD_INFO,
    info,
  }),
  updateInfo: (info) => ({
    type: types.UPDATE_INFO,
    info,
  }),
  deleteInfo: () => ({
    type: types.DELETE_INFO,
  }),
  setPageList: (pageList) => ({
    type: types.SET_PAGELIST,
    pageList,
  }),
  setCurPage: (target) => ({ type: types.SET_CURPAGE, target }),
  setMaxPage: (maxPage) => ({
    type: types.SET_MAXPAGE,
    maxPage,
  }),
  setDeletionList: (deletionList) => ({
    type: types.SET_DELETIONLIST,
    deletionList,
  }),
  addDeletionList: (targetId) => ({ type: types.ADD_DELETIONLIST, targetId }),
  removeDeletionList: (targetId) => ({
    type: types.REMOVE_DELETIONLIST,
    targetId,
  }),
  setCategory: (category) => ({ type: types.SET_CATEGORY, category }),
};

/*
 * get musical Info set, and set pagelist with result
 */
export function* getPageListSaga() {
  while (true) {
    const {
      data: { targetPage, pageControl, findData },
    } = yield take(types.REQUEST_PAGELIST);
    const category = yield select((state) => state.admin.category);
    const { data, lastPageNum } = yield call(getPageApi, {
      limitCount: 10,
      toPage: targetPage,
      pageControl,
      category: category === "전체" ? "all" : category,
      findData,
    });
    yield put(actions.setPageList(data));
    yield put(actions.setMaxPage(lastPageNum));
  }
}
/*
 * get selected item's info
 */
export function* getCurrentInfoSaga() {
  while (true) {
    const { targetId } = yield take(types.REQUEST_CURINFO);
    const curInfo = yield call(getMusicalData, targetId);
    yield put(actions.setCurInfo(curInfo));
  }
}

/*
 * add new info
 */
export function* addInfoSaga() {
  while (true) {
    const { info } = yield take(types.ADD_INFO);
    const res = yield call(addInfoApi, info);
    if (!res) {
      alert("등록에 실패하였습니다.");
    } else {
      yield put(actions.setCurInfo({}));
      const curPage = yield select((state) => state.admin.curPage);
      yield put(actions.requestPageList({ targetPage: curPage }));
    }
  }
}

/*
 * update selected info
 */
export function* updateInfoSaga() {
  while (true) {
    const { info } = yield take(types.UPDATE_INFO);
    const { musical_id } = yield select((state) => state.admin.curInfo);
    const res = yield call(updateInfoApi, { ...info, musical_id });
    if (!res) {
      alert("수정이 실패하였습니다");
    } else {
      alert("수정이 완료되었습니다.");
    }
  }
}

/*
 * delete selected info
 */
export function* deleteInfoSaga() {
  while (true) {
    yield take(types.DELETE_INFO);
    //get current state from redux
    const { pageList, deletionList, curPage, maxPage } = yield select(
      (state) => state.admin
    );
    if (!deletionList.length) {
      alert("삭제할 목록이 선택되지 않았습니다.");
    }
    //handle delete entire page
    const newPage =
      curPage === maxPage && pageList.length === deletionList.length
        ? curPage - 1
        : curPage;
    //delete every item in deletion list
    for (const target of deletionList) {
      const res = yield call(deleteInfoApi, target);
      if (!res) {
        alert("err");
      }
    }
    yield put(actions.setDeletionList([]));
    yield put(actions.setCurPage(newPage));
    yield put(actions.requestPageList({ targetPage: newPage }));
  }
}

export default function* watcher() {
  yield all([
    fork(getPageListSaga),
    fork(getCurrentInfoSaga),
    fork(addInfoSaga),
    fork(updateInfoSaga),
    fork(deleteInfoSaga),
  ]);
}
