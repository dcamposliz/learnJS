import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
    render: function() {
        return (
            <div class="app">
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/users">Users</Link>
                </nav>
                <main>
                    <h1>Users</h1>
                </main>
            </div>
        )
    }
});
