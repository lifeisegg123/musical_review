import createReducer from "common/createReducer";
import { types } from "action/admin";

const INITIAL_STATE = {
  pageList: [],
  curInfo: {},
  curPage: 1,
  maxPage: 2,
};

const reducer = createReducer(INITIAL_STATE, {
  [types.SET_PAGELIST]: (state, action) => (state.pageList = action.pageList),
  [types.SET_CURINFO]: (state, action) => (state.curInfo = action.curInfo),
  [types.SET_CURPAGE]: (state, action) => (state.curPage = action.target),
  [types.SET_MAXPAGE]: (state, action) => (state.maxPage = action.maxPage),
});

export default reducer;
