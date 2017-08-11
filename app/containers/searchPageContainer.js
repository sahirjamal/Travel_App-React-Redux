import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
// import { bindActionCreators } from 'redux';

import Styling from '../styling/searchPage.css';
import * as actions from '../actions/index';

import Location from './searchPage/locationContainer';
import Foods from './searchPage/foodsContainer';
import Drinks from './searchPage/drinksContainer';
import Attractions from './searchPage/attractionsContainer';
import Arts from './searchPage/artsContainer';
import Nightlife from './searchPage/nightlifeContainer';
import Budget from './searchPage/budgetContainer';

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
        </div>
     )
    }
  }


export default SearchPageContainer
