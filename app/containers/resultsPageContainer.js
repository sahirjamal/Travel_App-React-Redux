import React from 'react';
import Styling from '../styling/resultsPageContainer.css';
import { Menu, Container, Segment, Divider, Grid, Header } from 'semantic-ui-react';

import Foods from './resultsPage/foodsResults';
import Drinks from './resultsPage/drinksResults';
import Attractions from './resultsPage/attractionsResults';
import Arts from './resultsPage/artsResults';
import Events from './resultsPage/eventsResults';
import Nightlife from './resultsPage/nightlifeResults';
import SelectedOptions from './resultsPage/SelectedOptions';

class ResultsPageContainer extends React.Component {
  render() {
    return (
      <div className='resultsPage'>
        <Container className='header'>
          <h1>Potential Options</h1>
        </Container>

        <Container className='searchResults'>
          <Grid columns='three' divided>
            <Grid.Row stretched>
              <Grid.Column>
                <Segment> <SelectedOptions /> </Segment>
              </Grid.Column>

              <Grid.Column>
                <Segment> <Foods /> </Segment>
                <Segment> <Drinks /> </Segment>
                <Segment> <Events /> </Segment>
              </Grid.Column>

              <Grid.Column>
                <Segment> <Arts /> </Segment>
                <Segment> <Attractions /> </Segment>
                <Segment> <Nightlife /> </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </div>
   )
  }
}

export default ResultsPageContainer