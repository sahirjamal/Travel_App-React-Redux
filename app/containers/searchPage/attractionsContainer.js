import React from 'react';
import { connect } from 'react-redux';

import Styling from '../../styling/searchPage.css';
import Flexbox from 'flexbox-react';
import { Button } from 'semantic-ui-react';
import { toggleAttractions } from '../../actions/index';

import searchReducer from '../../reducers/searchReducer';

class Attractions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attractions: ['Parks', 'Museums', 'Landmarks', 'Historical Buildings', 'View Points']
    }
  }
  render() {
    return (
      <div className='Attractions'>
        <h3>Attractions</h3>
          {this.state.attractions.map((attraction) => 
            <Button onClick={() => this.props.toggleAttractions(attraction)} key={attraction}>{attraction}</Button>)}
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

