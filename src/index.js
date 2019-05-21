import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

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

const removePizzaReducer = (state = [], action) => {
    if (action.type === 'DELETE_ORDER') {
        const newState = state.filter((element, index) => {
            return index !== parseInt(action.payload);
        });
        return newState;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        removePizzaReducer,
        pizzaReducer,
        pizzaAddedReducer
    }),
    applyMiddleware(logger),
 );

 ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
