import React, { Component } from 'react';
import {connect} from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

class CustomerInfo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customerInfo:
                { customer_name: '',
                street_address: '',
                city: '',
                zip: '',
                type: ''
                },
        }
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    buttonClick = (event) => {
        this.props.dispatch(
            {type: 'ENTER_CUSTOMER_INFO',
            payload : this.state.customerInfo}
        );
        console.log('THIS IS THE INFO:' );
        console.log('NEXT BUTTON WORKING!');
    }
    
    render() {
        return (
            <div>
                    <input
                        type="text"
                        placeholder="Name"
                        onChange={this.handleChange('customer_name')}
                    />

                    <input
                        type="text"
                        placeholder="Street Address"
                        onChange={this.handleChange('street_address')}
                    />

                    <input
                        type="text"
                        placeholder="City"
                        onChange={this.handleChange('city')}
                    />

                    <input
                        type="text"
                        placeholder="Zip"
                        onChange={this.handleChange('zip')}
                    />

                    {/* <input
                        type="radio"
                        name="type"
                        value="pickup">
                        Pickup
                    </input>

                    <input
                        type="radio"
                        name="type"
                        value="delivery">
                        Delivery
                    </input> */}

                    <label>
                        <input
                            type="radio"
                            name="type"
                            value="pickup"/>
                            Pickup
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="type"
                            value="delivery"/>
                            Delivery
                    </label>

                <button onClick={this.buttonClick}>Next</button>
            </div>
        );
    }
}

export default connect(mapReduxStateToProps)(CustomerInfo);