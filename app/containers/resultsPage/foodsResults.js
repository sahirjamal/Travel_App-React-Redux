import React from 'react';
import Styling from '../../styling/results.css';
import { connect } from 'react-redux';

import axios from 'axios';
import yelp from 'yelp-fusion';

class FoodsResults extends React.Component {
  render() {
    return (
      <div className='foodsResults'>
        <h3>Food</h3> 
        {console.log('within render method', this.props.state)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('this is the foods', state);
  return {
    state: state.resultsReducer.list.foods
  }
}

export default connect(
  mapStateToProps, 
  null,
)(FoodsResults)

