import { combineReducers } from 'redux';
import clickCounter from './clickCounter/reducers';
import companyDirectory from './companyDirectory/reducers';

const rootReducer = combineReducers({
  clickCounter,
  companyDirectory,
});
export default rootReducer;
