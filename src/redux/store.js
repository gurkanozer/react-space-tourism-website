import {createStore, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import initialStates from './initialStates';
import rootReducer from "./reducers";

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialStates,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;