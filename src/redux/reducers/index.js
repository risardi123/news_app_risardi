import {combineReducers} from 'redux';
import reading_list from './reading_list';

const RootReducers  = combineReducers({
  reading_list: reading_list
})
export default RootReducers
