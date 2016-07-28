import React from 'react';
import Users from './users';
import { connect } from 'react-redux';
import { getUsers } from 'api/user';

/**
 * The stuff commented out below represents what a beginner might do 
 * if they didn't understand how to use react-redux correctly
 */

const UserContainer = React.createClass({

    // getInitialState: function() {
    //     return {
    //         users: []
    //     }
    // },

    componentWillMount: function() {
        //var _this = this;
        getUsers()
        // .then(function(response) {
        //     _this.setState({
        //         users: response.data
        //     })
        // })
    },

    render: function() {
        // return (
        //     <Users users={this.state.users}/>
        // )
        return (
            <Users {...this.props} />
        )
    }
});

const stateToProps = function(state) {
    return {
        users: state.userReducer.users
    }
}

const dispatchToProps = function(dispatch) {
    // In a real app, you would 'dispatch' an action here based
    // on the user being clicked
    return {
        onClick: () => {console.log('user was clicked')}
    }
}

export default connect(stateToProps, dispatchToProps)(UserContainer)
