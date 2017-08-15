import React from 'react';
// import { bindActionCreators } from 'redux';
import Styling from '../styling/searchPageContainer.css';
import { Container, Divider, Grid, Header } from 'semantic-ui-react';

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
          <Container className='header'>
            <Header as='h1'>Plan Your Journey</Header>
            <Location />
          </Container>
  
          <Container className='choices'>
            <Foods />
            <Drinks />
            <Attractions />
            <Arts />
            <Nightlife />
          </Container>

          <Container>
            <div className='budget'>
              <Budget />
            </div>
          </Container>

          <Container className='travelNow'>
            <Grid centered columns={2}>
              <TravelNow />
            </Grid>
          </Container>
        </div>
     )
    }
  }


export default SearchPageContainer
