import React from 'react';
import Styling from '../../styling/searchPageStyling';
import { Button } from 'react-bootstrap';
import Flexbox from 'flexbox-react';

class Nightlife extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nightlife: ['bars', 'clubs']
    }
  }
  render() {
    return (
      <div className='Nightlife'>
        <h3>Nightlife</h3>
        {this.state.nightlife.map((nightlife) => 
          <Button onClick={() => this.props.toggleNightlife(nightlife)} key={nightlife} 
                                  bsStyle='primary' bsSize='small'>{nightlife}</Button>)}
      </div>
    )
  }
}

export default Nightlife
