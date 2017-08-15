import React from 'react';
import { connect } from 'react-redux';

import Styling from '../../styling/searchOptions.css';
import Flexbox from 'flexbox-react';
import { Button } from 'semantic-ui-react';
import { toggleNightlife } from '../../actions/index';

import searchReducer from '../../reducers/searchReducer';

class Nightlife extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nightlife: ['Dive Bars', 'Dance Clubs', 'Lounges', 'Wine Bars', 'Cocktail Bars', 'Pubs', 'Sports Bars'],
      active: {
        'Dive Bars': false,
        'Dance Clubs': false,
        'Lounges': false,
        'Wine Bars': false,
        'Cocktail Bars': false,
        'Pubs': false,
        'Sports Bars': false
      }
    }
  }

  toggleAndActive(key) {
    this.props.toggleNightlife(key)

    let newState = this.state.active;
    newState[key] = !this.state.active[key];
    this.setState({active: newState});
  }

  render() {
    const { active } = this.state;
    return (
      <div className='nightlife'>
        <h3 className='nightlifeTitle'>Nightlife</h3>
          {this.state.nightlife.map((nightlife) => 
            <Button color='teal' toggle active={active[nightlife]} size='mini' 
              onClick={() => this.toggleAndActive(nightlife)} key={nightlife}>{nightlife}</Button>)}
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
