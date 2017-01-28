// React Stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

// My Components
import App from './components/App';
import Home from './components/Home.js';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Contact from './components/Contact.js';

// CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home} />
			<Route path="/about" component={About} />
			<Route path="/projects" component={Projects} />
			<Route path="/contact" component={Contact} />
		</Route>
	</Router>,
	document.getElementById('root')
);
