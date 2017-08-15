import React from 'react';
import { connect } from 'react-redux';

import Styling from '../../styling/searchOptions.css';
import Flexbox from 'flexbox-react';
import { Button } from 'semantic-ui-react';
import { toggleAttractions } from '../../actions/index';

import searchReducer from '../../reducers/searchReducer';

class Attractions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attractions: ['Parks', 'Museums', 'Landmarks', 'View Points'],
      active: {
        'Parks': false,
        'Museums': false,
        'Landmarks': false,
        'View Points': false
      }
    }
  }

  toggleAndActive(key) {
    this.props.toggleAttractions(key)

    let newState = this.state.active;
    newState[key] = !this.state.active[key];
    this.setState({active: newState});
  }

  render() {
    const { active } = this.state;
    return (
      <div className='attractions'>
        <h3 className='attractionsTitle'>Attractions</h3>
          {this.state.attractions.map((attraction) => 
            <Button color='teal' toggle active={active[attraction]} size='mini' 
              onClick={() => this.toggleAndActive(attraction)} key={attraction}>{attraction}</Button>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    attractions: state.searchReducer.attractions,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAttractions: (attraction) => (dispatch(toggleAttractions(attraction)))
  }
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Attractions)

