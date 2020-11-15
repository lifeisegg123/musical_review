import getPageApi, { addInfoApi, getMusicalData } from "api/adminApi";
import { all, call, put, take, fork } from "redux-saga/effects";

export const types = {
  REQUEST_PAGELIST: "admin/REQUEST_PAGELIST",
  SET_PAGELIST: "admin/SET_PAGELIST",
  REQUEST_CURINFO: "admin/REQUEST_CURINFO",
  SET_CURINFO: "admin/SET_CURINFO",
  ADD_INFO: "admin/ADD_INFO",
  SET_CURPAGE: "admin/SET_CURPAGE",
  SET_MAXPAGE: "admin/SET_MAXPAGE",
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
  setPageList: (pageList) => ({
    type: types.SET_PAGELIST,
    pageList,
  }),
  setCurPage: (target) => ({ type: types.SET_CURPAGE, target }),
  setMaxPage: (maxPage) => ({
    type: types.SET_MAXPAGE,
    maxPage,
  }),
};

export function* getPageList() {
  while (true) {
    const {
      data: { curPage, targetPage, pageControl },
    } = yield take(types.REQUEST_PAGELIST);
    const list = yield call(getPageApi, {
      limitCount: 10,
      nowPage: curPage,
      toPage: targetPage,
      pageControl,
    });
    yield put(actions.setPageList(list));
  }
}

export function* getCurrentInfo() {
  while (true) {
    const { targetId } = yield take(types.REQUEST_CURINFO);
    const curInfo = yield call(getMusicalData, targetId);
    yield put(actions.setCurInfo(curInfo));
  }
}

export function* addInfo() {
  while (true) {
    const { info } = yield take(types.ADD_INFO);
    const res = yield call(addInfoApi, info);
    console.log(res);
    if (!res) {
      alert("등록에 실패하였습니다.");
    }
  }
}

export default function* watcher() {
  yield all([fork(getPageList), fork(getCurrentInfo), fork(addInfo)]);
}
