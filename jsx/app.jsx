import {Header} from './header.js';
import {Nav} from './nav.js';
import {Action} from './action.js';

var app = [
	<Header />,
	<Nav />,
	<Action />,
]


ReactDOM.render(app, document.getElementById('app'));
