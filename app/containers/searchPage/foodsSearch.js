import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';

import Styling from '../../styling/searchOptions.css';
import Flexbox from 'flexbox-react';
import { Grid, Container, Button } from 'semantic-ui-react';
import { toggleFoods } from '../../actions/index';

import searchReducer from '../../reducers/searchReducer';

class Foods extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: ['Indian', 'Chinese', 'Italian', 'American', 'Vietnemese', 'Korean', 'Thai', 'Greek', 'Vegetarian'],
      active: {
        'Indian': false,
        'Chinese': false,
        'Italian': false,
        'American': false,
        'Vietnemese': false,
        'Korean': false,
        'Thai': false,
        'Greek': false,
        'Vegetarian': false
      }
    }
  }

  toggleAndActive(key) {
    this.props.toggleFoods(key)

    let newState = this.state.active;
    newState[key] = !this.state.active[key];
    this.setState({active: newState});
  }


  render() {
    const { active } = this.state;
    return (
      <Container className='foods'>
        <h3 className='foodsTitle'>Foods</h3>
        {this.state.foods.map((food) => 
          <Button color='violet' toggle active={active[food]} size='mini' 
            onClick={() => this.toggleAndActive(food)} key={food}>{food}</Button>)}
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
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
