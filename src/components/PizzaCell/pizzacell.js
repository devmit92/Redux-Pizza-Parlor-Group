import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps'

class PizzaCell extends Component {
    constructor(props){
        super(props)
            this.state= {
                name: this.props.name,
                price: this.props.price,

        }
    }

    selectPizza = (event) => {
        const payloadObject = {
            name: this.state.name,
            price: this.state.price
        }

        this.props.dispatch({type: 'ADD_PIZZA_TO_CART', payload: payloadObject});
    }
    render(){
        return(
            <div>
                <img src={this.props.img} alt={this.props.description}/>
                <p>{this.props.name}</p>
                <p>{this.props.description}</p>
                <p>{this.props.price}</p>
                <button onClick={this.selectPizza}>Add Pizza to Cart</button>
            </div>
        )
    }
}

export default connect(mapReduxStateToProps)(PizzaCell);