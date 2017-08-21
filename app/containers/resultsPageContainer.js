import React from 'react';
import Styling from '../styling/resultsPageContainer.css';
import { Menu, Container, Segment, Divider, Grid, Header } from 'semantic-ui-react';
import axios from 'axios';
import { connect } from 'react-redux';
import { addResults } from '../actions/index';

import Loading from './resultsPage/loadingScreen';
import Foods from './resultsPage/foodsResults';
import Drinks from './resultsPage/drinksResults';
import Attractions from './resultsPage/attractionsResults';
import Arts from './resultsPage/artsResults';
import Events from './resultsPage/eventsResults';
import Nightlife from './resultsPage/nightlifeResults';
import SelectedOptions from './resultsPage/SelectedOptions';

class ResultsPageContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
    }
  }

  isLoaded() {
    let newState = this.state.loaded;
    newState = true;
    this.setState({loaded: newState});
  }

  componentWillMount(){
      axios({
        url:'http://localhost:3000/api/results',
        method: 'POST',
        data: {
          state: this.props.state
        }
      }).then((response) => {
        this.props.addResults(response.data);
      })
      .catch((e) => console.log('yo', e))
  }

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


const mapStateToProps = (state) => {
  return {
    state: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addResults: (results) => (dispatch(addResults(results)))
  }
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps,
)(ResultsPageContainer)