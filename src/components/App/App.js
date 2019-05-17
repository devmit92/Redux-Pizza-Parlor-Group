import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { getOriginalPizzaList } from '../../modules/services/pizza.service';



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


  render() {
    const pizzaHTML = this.props.reduxState.pizzaReducer.map((pizza, index) => {
      return (
        <div key={index}>
          <img src={pizza.image_path} alt={pizza.description}/>
          <p>{pizza.name}</p>
          <p>{pizza.description}</p>
          <p>{pizza.price}</p>
        </div>
      )
    })
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Prime Pizza</h1>
        </header>
        <br/>
        <img src="images/pizza_photo.png"/>
        <p>Pizza is great.</p>
        {pizzaHTML}
      </div>
    );
  }
}

export default connect(mapReduxStateToProps)(App);
