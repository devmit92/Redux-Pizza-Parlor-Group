import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import 'bootstrap/dist/css/bootstrap.min.css';

const pizzaReducer = (state = [], action) => {
    if (action.type === 'ADD_PIZZA_TO_REDUX') {
        return action.payload;
    } 
    return state;

}

const pizzaAddedReducer = (state = [], action) => {
    if (action.type === 'PIZZA_DISPATCH') {
        return [...state, action.payload.pizzaArray];
    }
    return state;
}

const pizzaAdminOrderReducer= (state = [], action) => {
    if (action.type === 'DISPLAY_ADMIN_ORDER') {
        return action.payload;
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
        pizzaReducer,
        pizzaAddedReducer,
        pizzaAdminOrderReducer
    }),
    applyMiddleware(logger),
 );

 ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
