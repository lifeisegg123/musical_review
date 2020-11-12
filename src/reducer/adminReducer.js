import createReducer from "common/createReducer";
import { types } from "action/admin";

const INITIAL_STATE = {
  infos: [],
  curPage: 0,
  endPage: 0,
};

const reducer = createReducer(INITIAL_STATE, {
  [types.SET_INFOS]: (state, action) => (state.infos = action.infos),
  [types.SET_CURPAGE]: (state, action) => (state.curPage = action.target),
  [types.SET_ENDPAGE]: (state, action) => (state.endPage = action.endPage),
});

export default reducer;
