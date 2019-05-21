import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

class Cart extends Component {
    render(){
        const orderHtml = this.props.reduxState.cartReducer.map((order, index)=>{
            return (
                <div key={index}>
                    <p>{order.name}</p>
                    <p>{order.price}</p>

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