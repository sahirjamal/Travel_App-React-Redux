import React from 'react';
import Styling from '../styling/searchPage.css';
import { Button, FormGroup } from 'react-bootstrap';
import Flexbox from 'flexbox-react';

import Foods from './search/foods';
import Drinks from './search/drinks';
import Attractions from './search/attractions';
import Arts from './search/arts';
import Nightlife from './search/nightlife';

class SearchPage extends React.Component {

  render() {
    return (
      <div className='searchPage'>
        <div className='header'>
          <h1>Plan Your Journey</h1>
          <FormGroup className='location'>
            <input placeholder='Starting Location...' value={this.props.location} onChange={(e) => this.props.changeLocation(e.target.value)}></input>
          </FormGroup>
        </div>

        <div className='choices'>
            <Foods toggleFoods={(food) => this.props.toggleFoods(food)} />
            <Drinks toggleDrinks={(drink) => this.props.toggleDrinks(drink)} />
            <Attractions toggleAttractions={(attraction) => this.props.toggleAttractions(attraction)} />
            <Arts toggleArts={(art) => this.props.toggleArts(art)} />
            <Nightlife toggleNightlife={(nightlife) => this.props.toggleNightlife(nightlife)} />
        </div>
      </div>
   )
  }
}

export default SearchPage
