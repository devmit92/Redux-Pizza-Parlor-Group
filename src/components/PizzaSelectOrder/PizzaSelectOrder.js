import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';



class PizzaSelectOrder extends Component {

    addProductToCart = () => {
        console.log(this.props.product);
        // TODO: Dispatch here
        this.props.dispatch({
            type: 'ADD_ITEM_TO_CART',
            payload: this.props.product
        });
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
    
      addPizzaToOrder = (event) => {
       event.preventDefault();
       this.props.dispatch({
         type: 'PIZZA_DISPATCH',
         payload: this.state.pizzaArray
        })
       }

    render() {
        const pizzaHTML = this.props.reduxState.pizzaReducer.map((pizza, index) => {
            return (
              <div key={index}>
                <img src={pizza.image_path} alt={pizza.description}/>
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
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Prime Pizza</h1>
                    </header>
                    <br/>
                    <img src="images/pizza_photo.png"/>
                    <p>Pizza is great.</p>
                    {pizzaHTML}
                </div>
                {this.props.product.name}: {this.props.product.price}
                <Button onClick={this.addProductToCart} variant="outlined" color="primary">Add to Cart</Button>
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