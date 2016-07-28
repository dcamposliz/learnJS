import React from 'react';
import Widgets from './widgets';

export default React.createClass({

     getInitialState: function() {
         return {
             widgetData: ['one', 'two', 'three']
         }
     },

    render: function() {
        return (
            <Widgets widgetData={this.state.widgetData} />
        )
    }
});
