import React from 'react';

import search from './search';
import map from './map';
import currentLocation from './currentLocation';
import locationList from './locationList';

class App extends React.Component {

	getInitialState() {
		let favorites = [];
		
		
	}


	render() {
		return(
			<div>
				{console.log(localStorage)};
			</div>
		)
	}
}


export default App;
