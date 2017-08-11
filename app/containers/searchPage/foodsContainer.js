import React from 'react';
import { connect } from 'react-redux';

import Styling from '../../styling/searchPage.css';
import Flexbox from 'flexbox-react';
import { Button } from 'semantic-ui-react';
import { toggleFoods } from '../../actions/index';

import searchReducer from '../../reducers/searchReducer';

class Foods extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: ['Indian', 'Chinese', 'Italian', 'American', 'Vietnemese', 'Korean', 'Thai', 'Greek', 'Vegetarian']
    }
  }

  render() {
    return (
      <div className='food'>
        <h3>Food</h3>
        {this.state.foods.map((food) => 
          <Button onClick={() => this.props.toggleFoods(food)} key={food}>{food}</Button>)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    foods: state.searchReducer.foods,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFoods: (food) => (dispatch(toggleFoods(food)))
  }
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Foods)
