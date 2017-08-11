import React from 'react';
// import { bindActionCreators } from 'redux';
import Styling from '../styling/searchPage.css';

import Location from './searchPage/locationContainer';
import Foods from './searchPage/foodsSearch';
import Drinks from './searchPage/drinksSearch';
import Attractions from './searchPage/attractionsSearch';
import Arts from './searchPage/artsSearch';
import Nightlife from './searchPage/nightlifeSearch';
import Budget from './searchPage/budgetContainer';
import TravelNow from './searchPage/travelNowContainer';

class SearchPageContainer extends React.Component {
    render() {
      return (
        <div className='searchPage'>
          <div className='header'>
            <h1>Plan Your Journey</h1>
            <Location />
          </div>
  
          <div className='choices'>
              <Foods />
              <Drinks />
              <Attractions />
              <Arts />
              <Nightlife />
          </div>

          <div className='budget'>
            <Budget />
          </div>

          <div className='travelNow'>
            <TravelNow />
          </div>
        </div>
     )
    }
  }


export default SearchPageContainer
