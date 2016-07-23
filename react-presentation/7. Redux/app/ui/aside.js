import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <aside>
                Do we have users? {this.props.hasUsers ? 'Yes' : 'No'}
            </aside>
        )
    }
});