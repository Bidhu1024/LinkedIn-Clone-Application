import {createStore, applyMiddlware} from 'redux';
import rootReducer from '../Reducers/Index'

const store = createStore(rootReducer,{});
export default store;