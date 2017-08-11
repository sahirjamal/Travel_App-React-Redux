import React from 'react';
import { connect } from 'react-redux';

import Styling from '../../styling/searchPage.css';
import Flexbox from 'flexbox-react';
import { Button } from 'semantic-ui-react';
import { toggleArts } from '../../actions/index';

import searchReducer from '../../reducers/searchReducer';

class Arts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arts: ['Comedy Shows', 'Theatre', 'Art Galleries', 'Music Venues']
    }
  }
  render() {
    return (
      <div className='Arts'>
        <h3>Arts</h3>
          {this.state.arts.map((art) => 
            <Button basic color='blue' onClick={() => this.props.toggleArts(art)} key={art}>{art}</Button>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    arts: state.searchReducer.arts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleArts: (art) => (dispatch(toggleArts(art)))
  }
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Arts)

