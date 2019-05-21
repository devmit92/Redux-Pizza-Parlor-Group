import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const pizzaReducer = (state = [], action) => {
    if (action.type === 'ADD_PIZZA_TO_REDUX') {
        return action.payload
    }
    return state;
}

const cartReducer = (state = [], action) => {
    if (action.type === 'ADD_PIZZA_TO_CART') {
        return [...state, { name: action.payload.name, price: action.payload.price }];
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
        pizzaReducer,
        cartReducer
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
