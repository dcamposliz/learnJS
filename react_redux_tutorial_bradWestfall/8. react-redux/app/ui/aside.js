import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <aside>
                Users are in the store: {this.props.hasUsers ? 'Yes' : 'No'}
            </aside>
        )
    }
});