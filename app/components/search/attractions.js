import React from 'react';
import Styling from '../../styling/searchPageStyling';
import { Button } from 'react-bootstrap';
import Flexbox from 'flexbox-react';

class Attractions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attractions: ['park']
    }
  }
  render() {
    return (
      <div className='Attractions'>
        <h3>Attractions</h3>
        {this.state.attractions.map((attraction) => 
          <Button onClick={() => this.props.toggleAttractions(attraction)} key={attraction} 
                                  bsStyle='primary' bsSize='small'>{attraction}</Button>)}
      </div>
    )
  }
}

export default Attractions
