import createReducer from "common/createReducer";
import { types } from "action/admin";

const INITIAL_STATE = {
  pageList: [],
  deletionList: [],
  curInfo: {},
  curPage: 1,
  maxPage: 1,
};

const reducer = createReducer(INITIAL_STATE, {
  [types.SET_PAGELIST]: (state, action) => (state.pageList = action.pageList),
  [types.SET_CURINFO]: (state, action) => (state.curInfo = action.curInfo),
  [types.SET_CURPAGE]: (state, action) => {
    state.curPage = action.target;
    state.deletionList = [];
  },
  [types.SET_MAXPAGE]: (state, action) => (state.maxPage = action.maxPage),
  [types.SET_DELETIONLIST]: (state, action) =>
    (state.deletionList = action.deletionList),
  [types.ADD_DELETIONLIST]: (state, action) =>
    state.deletionList.push(action.targetId),
  [types.REMOVE_DELETIONLIST]: (state, action) =>
    (state.deletionList = state.deletionList.filter(
      (e) => e !== action.targetId
    )),
});

export default reducer;
