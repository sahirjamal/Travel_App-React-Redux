import React from 'react';
import Styling from '../../styling/searchPageStyling';
import { Button } from 'react-bootstrap';
import Flexbox from 'flexbox-react';
// import { Button } from 'react-toolbox/lib/button';

class Drinks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drinks: ['coffee', 'tea', 'smoothies', 'alcohol', 'wine']
    }
  }
  render() {
    return (
      <div className='Drinks' style={Styling.drinks}>
        <h3>Drinks</h3>
        {/* <Button icon='bookmark' label='bookmark' accent/>  */}
        {this.state.drinks.map((drink) => 
          <Button onClick={() => this.props.toggleDrinks(drink)} key={drink} bsStyle='primary' bsSize='small'>{drink}</Button>)}
      </div>
    )
  }
}

export default Drinks
