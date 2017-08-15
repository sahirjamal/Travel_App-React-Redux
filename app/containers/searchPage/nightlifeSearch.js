import React from 'react';
import { connect } from 'react-redux';

import Styling from '../../styling/searchPage.css';
import Flexbox from 'flexbox-react';
import { Button } from 'semantic-ui-react';
import { toggleNightlife } from '../../actions/index';

import searchReducer from '../../reducers/searchReducer';

class Nightlife extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nightlife: ['Dive Bars', 'Dance Clubs', 'Lounges', 'Wine Bars', 'Cocktail Bars', 'Pubs', 'Sports Bars'],
    }
  }

  render() {
    return (
      <div className='Nightlife'>
        <h3>Nightlife</h3>
          {this.state.nightlife.map((nightlife) => 
            <Button basic color='blue' size='mini' onClick={() => this.props.toggleNightlife(nightlife)} key={nightlife}>{nightlife}</Button>)}
      </div>
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
