import React from 'react';
import Styling from '../styling/resultsPageContainer.css';

import Foods from './resultsPage/foodsResults';
import Drinks from './resultsPage/drinksResults';
import Attractions from './resultsPage/attractionsResults';
import Arts from './resultsPage/artsResults';
import Nightlife from './resultsPage/nightlifeResults';
import SelectedOptions from './resultsPage/SelectedOptions';

class ResultsPageContainer extends React.Component {
  render() {
    return (
      <div className='resultsPage'>
        <div className='header'>
          <h1>Options</h1>
        </div>

        <div className='selectedOptionsResults'>
          <SelectedOptions />
        </div>

        <div className='searchResults'>
          <Drinks />
          <Foods />
        </div>
      </div>
   )
  }
}

export default ResultsPageContainer