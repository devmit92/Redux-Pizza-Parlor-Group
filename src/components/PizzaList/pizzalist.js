import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import PizzaCell from '../PizzaCell/pizzacell'

class PizzaList extends Component {
  goToCart = (event) => {
    this.props.history.push('/cart')
  }


  render() {
    const pizzaHTML = this.props.reduxState.pizzaReducer.map((pizza, index) => {
      return (
        <PizzaCell key={index}
          img={pizza.image_path}
          name={pizza.name}
          description={pizza.description}
          price={pizza.price}
          />
      )
    })
    return (
      <div>
        {pizzaHTML}
        <button onClick={this.goToCart}>Cart</button>
      </div>
    )
  }
}

export default connect(mapReduxStateToProps)(PizzaList);
