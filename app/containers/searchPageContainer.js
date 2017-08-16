import React from 'react';
// import { bindActionCreators } from 'redux';
import Styling from '../styling/searchPageContainer.css';
import { Container, Segment, Divider, Grid, Header } from 'semantic-ui-react';

import Location from './searchPage/locationContainer';
import Foods from './searchPage/foodsSearch';
import Drinks from './searchPage/drinksSearch';
import Attractions from './searchPage/attractionsSearch';
import Arts from './searchPage/artsSearch';
import Events from './searchPage/eventsSearch';
import Nightlife from './searchPage/nightlifeSearch';
import SeeResults from './searchPage/seeResultsContainer';

class SearchPageContainer extends React.Component {
  render() {
    return (
      <div className='searchPage'>
        <Container className='header'>
          <Grid columns='one'>
            <Grid.Column>
              <Segment>
                <Header as='h1'>Plan Your Journey</Header>
                <Location />
              </Segment>
            </Grid.Column>
          </Grid>
        </Container>

        <Container className='choices'>
          <Grid columns='two' divided>
            <Grid.Row>
              <Grid.Column>
                <Segment> <Foods /> </Segment>
                <Segment> <Arts /> </Segment>
                <Segment> <Events /> </Segment>
              </Grid.Column>

              <Grid.Column>
                <Segment> <Drinks /> </Segment>
                <Segment> <Attractions /> </Segment>
                <Segment> <Nightlife /> </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>

        <Container className='seeResults'>
          <Grid columns='one' textAlign='center'>
            <Grid.Column>
              <SeeResults />
            </Grid.Column>
          </Grid>
        </Container>
      </div>
     )
    }
  }


export default SearchPageContainer
