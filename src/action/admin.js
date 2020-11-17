import getPageApi, {
  addInfoApi,
  deleteInfoApi,
  getMusicalData,
} from "api/adminApi";
import { all, call, put, take, fork, select } from "redux-saga/effects";

export const types = {
  REQUEST_PAGELIST: "admin/REQUEST_PAGELIST",
  SET_PAGELIST: "admin/SET_PAGELIST",
  REQUEST_CURINFO: "admin/REQUEST_CURINFO",
  SET_CURINFO: "admin/SET_CURINFO",
  ADD_INFO: "admin/ADD_INFO",
  DELETE_INFO: "admin/DELETE_INFO",
  SET_CURPAGE: "admin/SET_CURPAGE",
  SET_MAXPAGE: "admin/SET_MAXPAGE",
  SET_DELETIONLIST: "admin/SET_DELETIONLIST",
  ADD_DELETIONLIST: "admin/ADD_DELETIONLIST",
  REMOVE_DELETIONLIST: "admin/REMOVE_DELETIONLIST",
};
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
};

export function* getPageListSaga() {
  while (true) {
    const {
      data: { curPage, targetPage, pageControl, category },
    } = yield take(types.REQUEST_PAGELIST);
    const { data, lastPageNum } = yield call(getPageApi, {
      limitCount: 10,
      nowPage: curPage,
      toPage: targetPage,
      pageControl,
      category,
    });
    yield put(actions.setPageList(data));
    yield put(actions.setMaxPage(lastPageNum));
  }
}

export function* getCurrentInfoSaga() {
  while (true) {
    const { targetId } = yield take(types.REQUEST_CURINFO);
    const curInfo = yield call(getMusicalData, targetId);
    yield put(actions.setCurInfo(curInfo));
  }
}

export function* addInfoSaga() {
  while (true) {
    const { info } = yield take(types.ADD_INFO);
    const res = yield call(addInfoApi, info);
    console.log(res);
    if (!res) {
      alert("등록에 실패하였습니다.");
    }
  }
}

export function* deleteInfoSaga() {
  while (true) {
    yield take(types.DELETE_INFO);
    const { pageList, deletionList, curPage, maxPage } = yield select(
      (state) => state.admin
    );
    if (!deletionList.length) {
      alert("삭제할 목록이 선택되지 않았습니다.");
    }
    const newPage =
      curPage === maxPage && pageList.length === deletionList.length
        ? curPage - 1
        : curPage;
    for (const target of deletionList) {
      const res = yield call(deleteInfoApi, target);
      if (res === false) {
        alert("err");
      }
    }
    yield put(actions.setDeletionList([]));
    const { data, lastPageNum } = yield call(getPageApi, {
      limitCount: 10,
      toPage: newPage,
    });
    yield put(actions.setPageList(data));
    yield put(actions.setMaxPage(lastPageNum));
  }
}

export default function* watcher() {
  yield all([
    fork(getPageListSaga),
    fork(getCurrentInfoSaga),
    fork(addInfoSaga),
    fork(deleteInfoSaga),
  ]);
}
