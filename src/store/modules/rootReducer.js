import {combineReducers} from 'redux';
import common from './common/reducer';
import categories from './categories/reducers';
import drinks from './drinks/reducers';

export default combineReducers({
  common,
  categories,
  drinks,
});
