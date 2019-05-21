import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';
import { deletePizzaOrder } from '../../modules/services/pizza.service'
class Cart extends Component {

    deletePizzaFromCart = (event) => {
          this.props.dispatch({
            type: 'DELETE_ORDER',
            payload: event.target.dataset.id,
          })
      }

    render(){
        const orderHtml = this.props.reduxState.cartReducer.map((order, index)=>{
            return (
                <div key={index}>
                    <p>{order.name}</p>
                    <p>{order.price}</p>
                    <button data-id={index} onClick={this.deletePizzaFromCart}>Delete</button>

                </div>
            )
        })
        return (
            <div>
                {orderHtml}
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(Cart);