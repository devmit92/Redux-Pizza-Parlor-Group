import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { logger } from 'redux-logger';


class CheckoutPage extends Component {
    handleCheckout = (event) {
        this.props.dispatch({
            type: 'CLEARCHECKOUT'
        })
        window.location.assign("http://localhost:3000/#/");
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
                  <Button color="primary" variant="contained" onClick={this.handleCheckout}><h2>Place Order!</h2></Button>
            </div>
        )
    }
};

export default connect(mapReduxStateToProps)(CheckoutPage);
    















}