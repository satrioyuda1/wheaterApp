import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Data from './pages/data';

class App extends Component {
	render() {
		return (
			<div className='bg'>
				<Router>
					<Switch>
						<Route path='/data'>
							<Data />
						</Route>
						<Route path='/'>
							<Home />
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
