import React from 'react';
import Users from './users';
import { getUsers } from 'api/user';

export default React.createClass({

    getInitialState: function() {
        return {
            users: []
        }
    },

    componentWillMount: function() {
        var _this = this;
        getUsers().then(function(response) {
            _this.setState({
                users: response.data
            })
        }).catch(function(err) {
            console.error(err);
        });
    },

    render: function() {
        return (
            <Users users={this.state.users} />
        )
    }
});
