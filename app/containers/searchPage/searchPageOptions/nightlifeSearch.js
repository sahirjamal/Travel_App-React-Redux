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
        {nightlife: 'Dive Bars', image: 'http://images.teamsugar.com/files/upl1/1/17470/34_2008/art_divebar_01.preview.jpg'},
        {nightlife: 'Dance Clubs', image: 'http://www.reservesandiego.com/travelguide/wp-content/uploads/sites/2/2015/02/Dance-Club-154078597.jpg'},
        {nightlife: 'Lounges', image: 'http://icyhotevents.com/galleries/lounges/06.jpg'},
        {nightlife: 'Wine Bars', image: 'https://vinumvine.files.wordpress.com/2010/03/beijingwinebar.jpg'}
      ],
      nightlife2: [
        {nightlife: 'Cocktail Bars', image: 'https://media.timeout.com/images/102875625/image.jpg'},
        {nightlife: 'Pubs', image: 'https://static01.nyt.com/images/2008/04/13/travel/13jour600.1.jpg'},
        {nightlife: 'Sports Bars', image: 'http://www.myrtlebeachlife.com/wp-content/uploads/sites/3/2020/03/SportsBars.jpg'}
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
        <Grid columns='two'>
          <Grid.Column>
            {Object.values(this.state.nightlife1).map((obj) => 
                <Segment compact textAlign='center' key={uuid()}>
                  <Image src={obj.image} size='small'/>
                  <Button compact size='small' toggle active={this.active(obj.nightlife)} 
                    onClick={() => this.props.toggleNightlife(obj.nightlife)}>{obj.nightlife}</Button>
                </Segment>
            )}
          </Grid.Column>

          <Grid.Column>
            {Object.values(this.state.nightlife2).map((obj) => 
              <Segment compact textAlign='center' key={uuid()}>
                <Image src={obj.image} size='small'/>
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
