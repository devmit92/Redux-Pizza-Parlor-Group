import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { getOriginalPizzaList } from '../../modules/services/pizza.service';
import { HashRouter as Router, Route } from 'react-router-dom';
import Cart from '../CartPage/cart';
import PizzaList from '../PizzaList/pizzalist';


class App extends Component {

  componentDidMount() {
    this.dispatchPizzaToRedux();
  }

  // Sends Pizzas in DB to Redux through Get and Dispatch
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
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Prime Pizza</h1>
          </header>
          <br />
          <img src="images/pizza_photo.png" alt="pizza" />
          <p>Pizza is great.</p>
          <Route exact path="/" component={PizzaList} />
          <Route path="/cart" component={Cart} />
        </div>
      </Router>

    );
  }
}

export default connect(mapReduxStateToProps)(App);
