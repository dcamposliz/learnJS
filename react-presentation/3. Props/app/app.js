import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Nav from 'ui/nav'; // Presenter Note: This path is possible because of the webpack config: "resolve"
import Anchor from 'ui/anchor';

ReactDOM.render((
    <Nav>
        <Anchor goSomewhere="http://google.com" text="Googles"/><br />
        <Anchor goSomewhere="http://twitter.com" text="Twitters"/>
    </Nav>
), document.getElementById('root'));
