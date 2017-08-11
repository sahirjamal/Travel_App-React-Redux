import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';

import Styling from '../../styling/searchPage.css';
import Flexbox from 'flexbox-react';
import { Button } from 'semantic-ui-react';
import { toggleFoods } from '../../actions/index';

import searchReducer from '../../reducers/searchReducer';

const foods = ['Indian', 'Chinese', 'Italian', 'American', 'Vietnemese', 'Korean', 'Thai', 'Greek', 'Vegetarian'];

class Foods extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      food: {}
    }
  }

  // handleClick(key) {
  //   const active = this.state.food;
  //   if (active[key]) {
  //     active[key] = !active[key];
  //   } else {
  //     active[key] = true;
  //   }
  //   this.setState({food: active})
  // }

  render() {

    return (
      <div className='food'>
        <h3>Food</h3>
        {foods.map((food) => 
          <Button basic color='blue' onClick={() => this.props.toggleFoods(food)} key={food}>{food}</Button>)}
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
