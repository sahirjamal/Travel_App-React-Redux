import React from 'react';
// import { bindActionCreators } from 'redux';
import Styling from '../styling/searchPageContainer.css';
import { Container, Segment, Grid, Header } from 'semantic-ui-react';

import Location from './searchPage/locationContainer';
import MenuOptions from './searchPage/menuOptions';
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
          <MenuOptions />
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
