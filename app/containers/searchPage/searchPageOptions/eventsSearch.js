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
        {event: 'Social', image: 'http://localhost:3000/images/events/social.jpg'},
        {event: 'Adventure', image: 'http://localhost:3000/images/events/adventure.jpg'},
      ],
      events2: [
        {event: 'Music', image: 'http://localhost:3000/images/events/music.jpg'},
        {event: 'Film', image: 'http://localhost:3000/images/events/film.jpg'},
      ],
      events3: [
        {event: 'Photography', image: 'http://localhost:3000/images/events/photography.jpg'},
        {event: 'Health & Wellness', image: 'http://localhost:3000/images/events/health.png'}
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
        <Grid columns='three'>
          <Grid.Column>
            {Object.values(this.state.events1).map((obj) => 
                <Segment compact textAlign='center' key={uuid()}>
                  <Image className='searchImage' src={obj.image} size='small'/>
                  <Button compact size='small' toggle active={this.active(obj.event)} 
                    onClick={() => this.props.toggleEvents(obj.event)}>{obj.event}</Button>
                </Segment>
            )}
          </Grid.Column>

          <Grid.Column>
            {Object.values(this.state.events2).map((obj) => 
              <Segment compact textAlign='center' key={uuid()}>
                <Image className='searchImage' src={obj.image} size='small'/>
                <Button compact size='small' toggle active={this.active(obj.event)} 
                  onClick={() => this.props.toggleEvents(obj.event)}>{obj.event}</Button>
              </Segment>
            )}
          </Grid.Column>

          <Grid.Column>
            {Object.values(this.state.events3).map((obj) => 
              <Segment compact textAlign='center' key={uuid()}>
                <Image className='searchImage' src={obj.image} size='small'/>
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
