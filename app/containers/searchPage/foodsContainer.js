import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';

import Styling from '../../styling/searchPage.css';
import Flexbox from 'flexbox-react';
import { Button } from 'semantic-ui-react';
import { toggleFoods } from '../../actions/index';

import searchReducer from '../../reducers/searchReducer';

class Foods extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: ['Indian', 'Chinese', 'Italian', 'American', 'Vietnemese', 'Korean', 'Thai', 'Greek', 'Vegetarian'],
      active: {}
    }
  }

  handleClick(key) {
    return Object.assign({}, this.state, {active: {key: Boolean}})
  }

  render() {
    const { active } = this.state;

    return (
      <div className='food'>
        <h3>Food</h3>
        {console.log(this.state)}
        <Button toggle active={active} onClick={this.handleClick()}>Hello Sahir</Button>
        {this.state.foods.map((food) => 
          <Button toggle active={active} onClick={this.handleClick(food)} basic color='blue' onClick={() => this.props.toggleFoods(food)} key={food}>{food}</Button>)}
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
