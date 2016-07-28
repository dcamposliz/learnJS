import React from 'react';

export default React.createClass({
    render: function() {
        return (
            <div className="widgets-page">
                <h1>App: Widgets</h1>
                <ul>
                    {this.props.widgetData.map(function(value, i) {
                        return (
                            <li key={i}>{value}</li>
                        );
                    })}
                </ul>
            </div>
        )
    }
});
