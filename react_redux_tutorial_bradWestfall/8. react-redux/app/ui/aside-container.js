import React from 'react';
import store from 'store';
import { connect } from 'react-redux';
import Aside from './aside';

const stateToProps = function(state) {
    return {
        hasUsers: state.userReducer.users.length ? true : false
    }
}

export default connect(stateToProps)(Aside);