import { createStore, combineReducers } from 'redux';
import userLogedInReducer from './userStateReducer';

const rootReducer = combineReducers(
    { user: userLogedInReducer }
);

const configureStore = () => {
    return createStore(rootReducer);
}
  
export default configureStore