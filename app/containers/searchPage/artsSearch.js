import React from 'react';
import { connect } from 'react-redux';

import Styling from '../../styling/searchOptions.css';
import Flexbox from 'flexbox-react';
import { Button } from 'semantic-ui-react';
import { toggleArts } from '../../actions/index';

import searchReducer from '../../reducers/searchReducer';

class Arts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arts: ['Comedy Shows', 'Theatre', 'Art Galleries', 'Music Venues'],
      active: {
        'Comedy Shows': false,
        'Theatre': false,
        'Art Galleries': false,
        'Music Venues': false,
      }
    }
  }

  toggleAndActive(key) {
    this.props.toggleArts(key)

    let newState = this.state.active;
    newState[key] = !this.state.active[key];
    this.setState({active: newState});
  }

  render() {
    const { active } = this.state;
    return (
      <div className='arts'>
        <h3 className='artsTitle'>Arts</h3>
          {this.state.arts.map((art) => 
            <Button color='teal' toggle active={active[art]} size='mini' 
              onClick={() => this.toggleAndActive(art)} key={art}>{art}</Button>)}
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

