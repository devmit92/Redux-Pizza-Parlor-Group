import React, { Component } from 'react';
import { connect } from 'react-redux';
import { displayOrderTable } from '../../modules/services/pizza.service';
import 'bootstrap/dist/css/bootstrap.min.css';


//  SO WE NEED TO PUSH THE AXIOS GET FOR THE ORDER TABLE INTO THE pizzaAdminOrderReducer REDUCER -- 
// THE FUNCTION I CREATED FOR THE AXIOS GET IS CALLED displayOrderTable, HOW DO I PUSH AN AXIOS GET INTO A REDUCER - dispatch
// action type is 'DISPLAY_ADMIN_ORDER'




class AdminOrders extends Component {
    componentDidMount() {
        displayOrderTable().then((response) => {
            console.log(response.data);
            this.props.dispatch({
                type: 'DISPLAY_ADMIN_ORDER',
                payload: response.data,
            });
            console.log('pizzaAdminOrderReducer', this.props.reduxState.pizzaAdminOrderReducer);

        })
    }



    render() {
        console.log(this.props.reduxState.pizzaAdminOrderReducer);
        const pizzaHTML = this.props.reduxState.pizzaAdminOrderReducer.map((pizza, index) => {
            return (


        <tbody>
            <tr>
                <td scope="row">{pizza.customer_name}</td>
                <td>{pizza.time}</td>
                <td>{pizza.type}</td>
                <td>{pizza.total}</td>
            </tr>
        </tbody>
    

            )
          })
        return (
            <div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Time Order Placed</th>
                            <th scope="col">Type</th>
                            <th scope="col">Cost</th>
                        </tr>
                    </thead>
                {pizzaHTML}
                </table>
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return {
      reduxState
    }
  }
export default connect(mapReduxStateToProps)(AdminOrders);