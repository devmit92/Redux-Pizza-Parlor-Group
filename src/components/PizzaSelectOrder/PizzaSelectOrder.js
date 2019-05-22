import React, { Component } from 'react';
import { connect } from 'react-redux';



class PizzaSelectOrder extends Component {
handleCheckout = (event) => {
        // TODO: Clear the cart and navigate to the product page
        console.log('this is ready for the next event after checkout')
        window.location.assign("http://localhost:3000/#/");
    }

    
    

    render() {
        console.log(this.props.reduxState.pizzaAddedReducer);
        const pizzaHTML = this.props.reduxState.pizzaAddedReducer.map((pizza, index) => {
            return (
              <div key={index}>
                <img src={pizza.image_path} alt={pizza.description}/>
                <p>{pizza.name}</p>
                <p>{pizza.description}</p>
                <p>{pizza.price}</p>
                <button>Remove</button>
              </div>
            )
          })
        
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Prime Pizza Checkout</h1>
                    </header>
                    <br/>
                    {pizzaHTML}
                </div>
                {this.props.product.name}: {this.props.product.price}
                <button onClick={this.handleCheckout}>Checkout</button>

            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return {
      reduxState
    }
  }
  export default connect(mapReduxStateToProps)(PizzaSelectOrder);