import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { getOriginalPizzaList, addPizzaToOrderTable, deletePizzaOrder } from '../../modules/services/pizza.service';
import { HashRouter as Router, Route } from 'react-router-dom';
import PizzaList from '../PizzaList/pizzalist';



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

  
deletePizzaFromCart = (event) => {
  deletePizzaOrder().then((response) => {
    console.log(response)
    this.props.dispatch({
      type: 'DELETE_ORDER',
      payload: event.target.dataset.id,
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
        <br/>
        <img src="images/pizza_photo.png"/>
        <p>Pizza is great.</p>
        <Route exact path="/" component={PizzaList} />
      </div>
      </Router>
    )
  }
}

export default connect(mapReduxStateToProps)(App);
