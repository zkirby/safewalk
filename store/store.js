import { createStore, combineReducers } from 'redux';
import views from './viewReducer';

const starting_obj = {
	views: [],
}
const rootReducer = combineReducers({ views });

const store = createStore(rootReducer, starting_obj);

export default store;