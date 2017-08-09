import React from 'react';
import Styling from '../../styling/searchPageStyling';
import { Button } from 'react-bootstrap';
import Flexbox from 'flexbox-react';


class Food extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foods: ['indian', 'chinese', 'italian', 'American', 'Vietnemese', 'Korean', 'Thai', 'Greek', 'Vegetarian']
    }
  }

  render() {
    return (
      <div className='food' style={{justifyContent: 'left'}}>
      <h3>Food</h3>
      {this.state.foods.map((food) => 
        <Button onClick={() => this.props.toggleFoods(food)} key={food} bsStyle='primary' bsSize='small'>{food}</Button>)}
      </div>
    )
  }
}

export default Food
