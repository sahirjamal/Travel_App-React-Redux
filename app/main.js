import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router';
import { ConnectedRouter, routerMiddleware, push } from 'react-router-redux';
import rootReducer from './reducers/index';
import DevTools from './components/reduxDevTools'; // Need to fix this (add store production/development and devTool.instrument())

import HomePageContainer from './containers/homePageContainer';
import SearchPageContainer from './containers/searchPageContainer';
import ResultsPageContainer from './containers/resultsPageContainer';

// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

const store = createStore(rootReducer, applyMiddleware(middleware));

ReactDOM.render(<Provider store={store}>
	<ConnectedRouter history={history}>
		<div>
			<Route path="/" exact component={HomePageContainer}/>
			<Route path="/search" exact component={SearchPageContainer}/>
			<Route path="/results" exact component={ResultsPageContainer}/>
		</div>
	</ConnectedRouter>
	</Provider>,
	document.getElementById('root'));