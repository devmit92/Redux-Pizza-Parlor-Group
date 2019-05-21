import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps'

class PizzaList extends Component {
  goToCart = (event) => {
    this.props.history.push('/cart')
  }
  render(){
        const pizzaHTML = this.props.reduxState.pizzaReducer.map((pizza, index) => {
            return (
              <div key={index}>
                <img src={pizza.image_path} alt={pizza.description} />
                <p>{pizza.name}</p>
                <p>{pizza.description}</p>
                <p>{pizza.price}</p>
                <button data-id={index} onClick={this.addPizzaToOrder}>Add</button>
                <button>Remove</button>
              </div>
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