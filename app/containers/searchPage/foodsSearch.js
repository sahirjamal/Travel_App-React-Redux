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
      foods: ['Indian', 'Chinese', 'Italian', 'American', 'Vietnemese', 'Korean', 'Thai', 'Greek', 'Vegetarian']
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
      <Container className='foods'>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column><h3 className='foodsTitle'>Food</h3>
        {this.state.foods.map((food) => 
          <Button basic color='blue' size='mini' onClick={() => this.props.toggleFoods(food)} key={food}>{food}</Button>)}</Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
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
