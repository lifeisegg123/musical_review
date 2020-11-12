import { createStore, combineReducers, applyMiddleware } from "redux";
import adminReducer from "reducer/adminReducer";

import createSagaMiddleware from "redux-saga";
import adminSaga from "action/admin";

const reducer = combineReducers({
  admin: adminReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

export default store;

sagaMiddleware.run(adminSaga);
