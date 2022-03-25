import { createStore, combineReducers, applyMiddleware } from 'redux';
import appReducer from './userStateReducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({appReducer});

const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}
  
export default configureStore