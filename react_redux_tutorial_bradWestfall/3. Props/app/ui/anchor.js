import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <a href={this.props.goSomewhere}>{this.props.text}</a>
        )
    }
});
