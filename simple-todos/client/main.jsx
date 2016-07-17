import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/accounts-config.js';
import App from '../imports/ui/App.jsx';


// here is some initialization code:
Meteor .startup(() => {
    render(<App />, document.getElementById('render-target'));
});
