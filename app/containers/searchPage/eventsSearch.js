import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';

import Styling from '../../styling/searchOptions.css';
import Flexbox from 'flexbox-react';
import { Grid, Container, Button } from 'semantic-ui-react';
import { toggleEvents } from '../../actions/index';

import searchReducer from '../../reducers/searchReducer';

class Events extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      events: ['Social', 'Adventure', 'Music', 'Film', 'Health & Wellness'],
      active: {
        'Social': false,
        'Adventure': false,
        'Music': false,
        'Film': false,
        'Health & Wellness': false
      }
    }
  }

  toggleAndActive(key) {
    this.props.toggleEvents(key)

    let newState = this.state.active;
    newState[key] = !this.state.active[key];
    this.setState({active: newState});
  }


  render() {
    const { active } = this.state;
    return (
      <Container className='events'>
        <h3 className='eventsTitle'>Events</h3>
        {this.state.events.map((event) => 
          <Button color='teal' toggle active={active[event]} size='mini' 
            onClick={() => this.toggleAndActive(event)} key={event}>{event}</Button>)}
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
