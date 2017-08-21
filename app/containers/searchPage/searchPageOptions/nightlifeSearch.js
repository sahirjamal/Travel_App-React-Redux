import React from 'react';
import { connect } from 'react-redux';
import Styling from '../../../styling/searchOptions.css';
import _ from 'underscore';

import { Grid, Container, Button, Image, Segment} from 'semantic-ui-react';
import { toggleNightlife } from '../../../actions/index';
import uuid from 'uuid/v4';

class Nightlife extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nightlife1: [
        {nightlife: 'Dive Bars', image: 'http://localhost:3000/images/nightlife/diveBar.jpg'},
        {nightlife: 'Dance Clubs', image: 'http://localhost:3000/images/nightlife/danceClub.jpg'},
      ],
      nightlife2: [
        {nightlife: 'Wine Bars', image: 'http://localhost:3000/images/nightlife/wineBar.jpg'},
        {nightlife: 'Cocktail Bars', image: 'http://localhost:3000/images/nightlife/cocktailbar.jpg'},
      ],
      nightlife3: [
        {nightlife: 'Pubs', image: 'http://localhost:3000/images/nightlife/pub.jpg'},
        {nightlife: 'Sports Bars', image: 'http://localhost:3000/images/nightlife/sportBar.jpg'}
      ]
    }
  }

  active(nightlife) {
    if (_.contains(this.props.nightlife, nightlife)) { 
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <Container className='nightlife'>
        <Grid columns='three'>
          <Grid.Column>
            {Object.values(this.state.nightlife1).map((obj) => 
                <Segment compact textAlign='center' key={uuid()}>
                  <Image className='searchImage' src={obj.image} size='small'/>
                  <Button compact size='small' toggle active={this.active(obj.nightlife)} 
                    onClick={() => this.props.toggleNightlife(obj.nightlife)}>{obj.nightlife}</Button>
                </Segment>
            )}
          </Grid.Column>

          <Grid.Column>
            {Object.values(this.state.nightlife2).map((obj) => 
              <Segment compact textAlign='center' key={uuid()}>
                <Image className='searchImage' src={obj.image} size='small'/>
                <Button compact size='small' toggle active={this.active(obj.nightlife)} 
                  onClick={() => this.props.toggleNightlife(obj.nightlife)}>{obj.nightlife}</Button>
              </Segment>
            )}
          </Grid.Column>

          <Grid.Column>
            {Object.values(this.state.nightlife3).map((obj) => 
              <Segment compact textAlign='center' key={uuid()}>
                <Image className='searchImage' src={obj.image} size='small'/>
                <Button compact size='small' toggle active={this.active(obj.nightlife)} 
                  onClick={() => this.props.toggleNightlife(obj.nightlife)}>{obj.nightlife}</Button>
              </Segment>
            )}
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    nightlife: state.searchReducer.nightlife
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleNightlife: (nightlife) => (dispatch(toggleNightlife(nightlife)))
  }
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Nightlife)
