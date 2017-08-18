import React from 'react';
import { connect } from 'react-redux';

import Styling from '../../../styling/searchOptions.css';
import Flexbox from 'flexbox-react';
import { Form } from 'semantic-ui-react';
import { changeLocation } from '../../../actions/index';

import locationReducer from '../../../reducers/locationReducer';

class Location extends React.Component {

  render() {
    return (
      <div className='location'>
        <Form>
          <input placeholder='Starting Location...' value={this.props.location} onChange={(e) => this.props.changeLocation(e.target.value)}/>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    location: state.locationReducer.location,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeLocation: (location) => (dispatch(changeLocation(location)))
  }
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Location)
