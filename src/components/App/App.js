
import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { getOriginalPizzaList, addPizzaToOrderTable } from '../../modules/services/pizza.service';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import AdminOrders from '../AdminOrders/AdminOrders';




class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pizzaArray: [],
    }
  }

  componentDidMount() {
    this.dispatchPizzaToRedux();
  }

  
  dispatchPizzaToRedux = () => {
    getOriginalPizzaList().then((response) => {
      console.log(response)
      this.props.dispatch({
        type: 'ADD_PIZZA_TO_REDUX',
        payload: response.data,
      })
    })
  }

  addPizzaToOrder = (event) => {
   event.preventDefault();
   this.props.dispatch({
     type: 'PIZZA_DISPATCH',
     payload: this.state.pizzaArray
    })
   }





  render() {
    const pizzaHTML = this.props.reduxState.pizzaReducer.map((pizza, index) => {
      return (
        <div key={index}>
          <img src={pizza.image_path} alt={pizza.description}/>
          <p>{pizza.name}</p>
          <p>{pizza.description}</p>
          <p>{pizza.price}</p>
          <button data-id={index} onClick={this.addPizzaToOrder}>Add</button>
          <button>Remove</button>
        </div>
      )
    })
    return (
      <Router>
        <Route exact path="/admin" component={AdminOrders} />

      </Router>
    );
  }
}

export default connect(mapReduxStateToProps)(App);