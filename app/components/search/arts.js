import React from 'react';
import Styling from '../../styling/searchPageStyling';
import { Button } from 'react-bootstrap';
import Flexbox from 'flexbox-react';

class Arts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arts: ['museum']
    }
  }
  render() {
    return (
      <div className='Arts'>
        <h3>Arts</h3>
        {this.state.arts.map((art) => 
          <Button onClick={() => this.props.toggleArts(art)} key={art} 
                                  bsStyle='primary' bsSize='small'>{art}</Button>)}
      </div>
    )
  }
}

export default Arts
