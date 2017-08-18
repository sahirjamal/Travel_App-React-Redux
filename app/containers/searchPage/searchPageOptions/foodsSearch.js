import React from 'react';
import { connect } from 'react-redux';
import Styling from '../../../styling/searchOptions.css';
import _ from 'underscore';

import { Grid, Container, Button, Image, Segment} from 'semantic-ui-react';
import { toggleFoods } from '../../../actions/index';
import uuid from 'uuid/v4';

class Foods extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foods1: [
        {food: 'Indian', image: 'http://localhost:3000/images/foods/indian.jpg'},
        {food: 'Chinese', image: 'http://localhost:3000/images/foods/chinese.jpg'},
        {food: 'Italian', image: 'http://localhost:3000/images/foods/italian.jpg'}
      ],
      foods2: [
        {food: 'American', image: 'http://localhost:3000/images/foods/american.jpg'},
        {food: 'Vietnamese', image: 'http://localhost:3000/images/foods/vietnamese.jpg'},
        {food: 'Korean', image: 'http://localhost:3000/images/foods/korean.jpg'}
      ],
      foods3: [
        {food: 'Thai', image: 'http://localhost:3000/images/foods/thai.jpg'},
        {food: 'Greek', image: 'http://localhost:3000/images/foods/greek.jpg'},
        {food: 'Vegetarian', image: 'http://localhost:3000/images/foods/vegetarian.jpg'}
      ]
    }
  }

  active(food) {
    if (_.contains(this.props.foods, food)) { 
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <Container className='foods'>
        <Grid columns='three'>
          <Grid.Column>
            {Object.values(this.state.foods1).map((obj) => 
                <Segment compact textAlign='center' key={uuid()}>
                  <Image className='searchImage' src={obj.image} size='small'/>
                  <Button compact size='small' toggle active={this.active(obj.food)} 
                    onClick={() => this.props.toggleFoods(obj.food)}>{obj.food}</Button>
                </Segment>
            )}
          </Grid.Column>

          <Grid.Column>
            {Object.values(this.state.foods2).map((obj) => 
              <Segment compact textAlign='center' key={uuid()}>
                <Image className='searchImage' src={obj.image} size='small'/>
                <Button compact size='small' toggle active={this.active(obj.food)} 
                  onClick={() => this.props.toggleFoods(obj.food)}>{obj.food}</Button>
              </Segment>
            )}
          </Grid.Column>

          <Grid.Column>
            {Object.values(this.state.foods3).map((obj) => 
              <Segment compact textAlign='center' key={uuid()}>
                <Image className='searchImage' src={obj.image} size='small'/>
                <Button compact size='small' toggle active={this.active(obj.food)} 
                  onClick={() => this.props.toggleFoods(obj.food)}>{obj.food}</Button>
              </Segment>
            )}
          </Grid.Column>
        </Grid>
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
  mapDispatchToProps,
)(Foods)