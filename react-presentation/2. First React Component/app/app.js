import React from 'react'; // Presenter Note: Required even if we're not using the `React` object
import ReactDOM from 'react-dom';
import FirstComponent from './first-component';

ReactDOM.render((
    <FirstComponent />
), document.getElementById('root'));




/*

"Similar" jQuery

var FirstComponent = $('<div>Hello World</div>');
$('#root').html(FirstComponent);

*/