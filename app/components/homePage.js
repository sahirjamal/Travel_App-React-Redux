import React from 'react';
import Styling from '../styling/homePageStyling';
import SearchPage from './searchPage';
import { Button } from 'react-bootstrap';

class HomePage extends React.Component {

render() {
    return (
      <div>
        <div className='background' style={Styling.mainPage}>
          <div className='homeBody'>
            <h1>TravelBuddy</h1>
            <h2>Pack your bags - let us pave the way.</h2>
          </div>
        <h2>We'll worry about the details</h2>
        <Button type='button' bsStyle='primary' bsSize='large'>Travel Now</Button>
        </div>
    </div>
    )
  }
}

export default HomePage
