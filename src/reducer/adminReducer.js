import createReducer from "common/createReducer";
import { types } from "action/admin";

const INITIAL_STATE = {
  infos: [],
  curPage: 0,
  maxPage: 0,
};

const reducer = createReducer(INITIAL_STATE, {
  [types.SET_INFOS]: (state, action) => (state.infos = action.infos),
  [types.SET_CURPAGE]: (state, action) => (state.curPage = action.target),
  [types.SET_MAXPAGE]: (state, action) => (state.maxPage = action.maxPage),
});

export default reducer;
