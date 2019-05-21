import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapReduxStateToProps from '../../modules/mapReduxStateToProps';

class Cart extends Component {
    render(){
        return (
            <div>Content</div>
        )
    }
}

export default connect(mapReduxStateToProps)(Cart);