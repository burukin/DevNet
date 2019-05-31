/**
 * Created by agros on 24.05.2019.
 */
import {createStore, applyMiddleware} from 'redux';
import  {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialStore = {};

const middleWare = [thunk];

const store = createStore(
    rootReducer,
    initialStore,
    composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;