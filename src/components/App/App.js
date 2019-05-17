import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pizzaArray: [],
    }
  }

  componentDidMount() {
    this.getOriginalPizzaList();
  }

  getOriginalPizzaList() {
    axios.get('/api/pizza')
      .then((res) => {
        console.log(res);
        this.setState({
          pizzaArray: res.data
        });
        console.log(this.state)
      })
      .catch((err) => {
        console.log(err);
      })
  }


  render() {
    const pizzaHTML = this.state.pizzaArray.map((pizza, index) => {
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

export default App;
