import React from 'react';
import Styling from '../../styling/searchPage.css';
import Flexbox from 'flexbox-react';
import { Button } from 'semantic-ui-react';

class TravelNow extends React.Component {
  render() {
    return (
      <div className='travelNowButton'>
            <Button size='large' key='travelNowButton'>Travel Now!</Button>
      </div>
    )
  }
}

export default TravelNow