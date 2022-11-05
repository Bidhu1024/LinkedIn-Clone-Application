import {createStore, applyMiddlware} from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from '../Reducers/Index'

const store = createStore(rootReducer,applyMiddlware(thunkMiddleware));
export default store;