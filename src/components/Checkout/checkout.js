import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { addPizzaToOrderTable } from '../../modules/services/pizza.service';


class CheckoutPage extends Component {
    handleCheckout = (event) => {
        addPizzaToOrderTable(this.reduxState.pizzaAddedReducer).then((response) => {
         this.props.dispatch({
            type: 'CLEARCHECKOUT'    
         });
        });
    };

    render() {
        return (
            <div>
                <h2><i>Checkout!!</i></h2>
                  <ol>
                      {this.props.reduxState.pizzaCheckoutReducer.map((pizza, index) => {
                          return (
                              <li key={index} pizza={pizza}>{pizza.name}<br />{pizza.price} </li>
                          );
                      })}
                  </ol>
                  <button onClick={this.handleCheckout}><h2>Place Order!</h2></button>
            </div>
        )
    }
};

export default connect(mapReduxStateToProps)(CheckoutPage);
    















}