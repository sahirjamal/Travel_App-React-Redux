import React from 'react';
import { Menu, Grid, Segment } from 'semantic-ui-react';

import Foods from '../searchPageOptions/foodsSearch';
import Drinks from '../searchPageOptions/drinksSearch';
import Attractions from '../searchPageOptions/attractionsSearch';
import Arts from '../searchPageOptions/artsSearch';
import Events from '../searchPageOptions/eventsSearch';
import Nightlife from '../searchPageOptions/nightlifeSearch';

import ShowSelected from './showSelected';

class MenuOptions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: 'foods'
    }
  }

  showSearchOption(name) {
    let newState = this.state;
    newState.activeItem = name;
    this.setState({newState});
  }

  showChosenOption() {
    switch(this.state.activeItem) {
      case 'foods':
        return <Foods />
      case 'drinks':
        return <Drinks />
      case 'arts':
        return <Arts />
      case 'attractions':
        return <Attractions />
      case 'events':
        return <Events />
      case 'nightlife':
        return <Nightlife />
      default:
        return <Foods />
    }
  }

  render() {
    const { activeItem } = this.state;
    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item name='food' active={activeItem === 'foods'} onClick={() => this.showSearchOption('foods')} />
            <Menu.Item name='drinks' active={activeItem === 'drinks'} onClick={() => this.showSearchOption('drinks')} />
            <Menu.Item name='arts' active={activeItem === 'arts'} onClick={() => this.showSearchOption('arts')} />
            <Menu.Item name='attractions' active={activeItem === 'attractions'} onClick={() => this.showSearchOption('attractions')} />
            <Menu.Item name='events' active={activeItem === 'events'} onClick={() => this.showSearchOption('events')} />
            <Menu.Item name='nightlife' active={activeItem === 'nightlife'} onClick={() => this.showSearchOption('nightlife')} />
          </Menu>
          <ShowSelected />
        </Grid.Column>

        <Grid.Column stretched width={12}>
         <Segment>{this.showChosenOption()}</Segment>
        </Grid.Column>

        
      </Grid>
    )
  }
}

export default MenuOptions