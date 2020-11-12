import getInfosApi, { addInfoApi } from "api/adminApi";
import { all, call, put, take, fork } from "redux-saga/effects";

export const types = {
  REQUEST_INFO: "admin/REQUEST_INFO",
  ADD_INFO: "admin/ADD_INFO",
  SET_INFOS: "admin/SET_INFOS",
  SET_CURPAGE: "admin/SET_CURPAGE",
  SET_ENDPAGE: "admin/SET_ENDPAGE",
};
export const actions = {
  requestInfo: () => ({
    type: types.REQUEST_INFO,
  }),
  addInfo: (info) => ({
    type: types.ADD_INFO,
    info,
  }),
  setInfos: (infos) => ({
    type: types.SET_INFOS,
    infos,
  }),
  setCurPage: (target) => ({ type: types.SET_CURPAGE, target }),
  setEndPage: (endPage) => ({
    type: types.SET_ENDPAGE,
    endPage,
  }),
};

export function* getInfos() {
  while (true) {
    yield take(types.REQUEST_INFO);
    const infos = yield call(getInfosApi);
    yield put(actions.setInfos(infos));
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
  yield all([fork(getInfos), fork(addInfo)]);
}
