import React from 'react';
import { connect } from 'react-redux';
import Styling from '../../../styling/searchOptions.css';
import _ from 'underscore';

import { Grid, Container, Button, Image, Segment} from 'semantic-ui-react';
import { toggleEvents } from '../../../actions/index';
import uuid from 'uuid/v4';

class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events1: [
        {event: 'Social', image: 'http://eon51.com/wp-content/uploads/2015/06/guest-enjoying-the-view-at-eon-heli-bar.jpg'},
        {event: 'Adventure', image: 'http://first4adventure.co.uk/wp-content/uploads/2014/03/Fotolia-girl-sunset.jpg'},
        {event: 'Music', image: 'https://www.sxsw.com/wp-content/uploads/2017/03/Gary-Clark-Jr.-photo-courtesy-of-the-artist.jpg'}
      ],
      events2: [
        {event: 'Film', image: 'http://www.saga.co.uk/contentlibrary/saga/publishing/verticals/entertainment/films-and-tv/films-hero-1260x600.jpg'},
        {event: 'Health & Wellness', image: 'http://www.lovelaconner.com/wp-content/uploads/Health-and-Wellness.jpg'}
      ]
    }
  }

  active(event) {
    if (_.contains(this.props.events, event)) { 
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <Container className='events'>
        <Grid columns='two'>
          <Grid.Column>
            {Object.values(this.state.events1).map((obj) => 
                <Segment compact textAlign='center' key={uuid()}>
                  <Image src={obj.image} size='small'/>
                  <Button compact size='small' toggle active={this.active(obj.event)} 
                    onClick={() => this.props.toggleEvents(obj.event)}>{obj.event}</Button>
                </Segment>
            )}
          </Grid.Column>

          <Grid.Column>
            {Object.values(this.state.events2).map((obj) => 
              <Segment compact textAlign='center' key={uuid()}>
                <Image src={obj.image} size='small'/>
                <Button compact size='small' toggle active={this.active(obj.event)} 
                  onClick={() => this.props.toggleEvents(obj.event)}>{obj.event}</Button>
              </Segment>
            )}
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    events: state.searchReducer.events,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleEvents: (event) => (dispatch(toggleEvents(event)))
  }
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Events)
