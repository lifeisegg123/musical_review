import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import adminSaga from "action/admin";
import adminReducer from "reducer/adminReducer";

const reducer = combineReducers({
  admin: adminReducer,
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(adminSaga);

export default store;
