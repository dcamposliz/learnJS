import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

// App Reducers
import userReducer from './reducers/user';

// Combine Reducers
var reducers = combineReducers({
    userReducer: userReducer
    // more if you want...
});

// Create Store
var store = createStore(
    reducers,
    applyMiddleware(thunk)
);

export default store;