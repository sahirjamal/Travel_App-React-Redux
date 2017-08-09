import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import SearchPageContainer from './app/containers/searchPageContainer';
import rootReducer from './app/reducers/index';
import DevTools from './app/components/reduxDevTools'; // Need to fix this (add store production/development and devTool.instrument())

const store = createStore(rootReducer);

console.log(store.getState());









ReactDOM.render(<Provider store={store}>
	<div>
		<SearchPageContainer />
	</div>
	</Provider>,
	document.getElementById('root'));