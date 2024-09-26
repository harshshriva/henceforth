import { createStore, combineReducers } from 'redux';
import taskReducer from './reducers/taskReducer';

// Combine reducers if you have more than one
const rootReducer = combineReducers({
    tasks: taskReducer,  // Replace this with the actual reducer(s)
});

// Create the store using the rootReducer
const store = createStore(rootReducer);

export default store;
