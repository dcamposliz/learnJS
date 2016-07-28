import React from 'react';
import Aside from './aside';
import store from 'store';

export default React.createClass({

    getInitialState: function() {
        return {
            hasUsers: false
        }
    },

    componentWillMount: function() {
       var _this = this;
        store.subscribe(function() {
            var currentStore = store.getState()
            _this.setState({
                hasUsers: currentStore.userReducer.users.length ? true : false
            })
        })

    },

    render: function() {
        return (
            <Aside hasUsers={this.state.hasUsers} />
        )
    }
});
