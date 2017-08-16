import React from 'react';
import Styling from '../styling/resultsPageContainer.css';
import { Menu, Container, Segment, Divider, Grid, Header } from 'semantic-ui-react';

import Foods from './resultsPage/foodsResults';
import Drinks from './resultsPage/drinksResults';
import Attractions from './resultsPage/attractionsResults';
import Arts from './resultsPage/artsResults';
import Events from './resultsPage/eventsResults';
import Nightlife from './resultsPage/nightlifeResults';
import SelectedOptions from './resultsPage/SelectedOptions';

class ResultsPageContainer extends React.Component {
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

  render() {
    const { activeItem } = this.state;

    return (
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <Menu.Item name='foods' active={activeItem === 'foods'} onClick={() => this.showSearchOption('foods')} />
            <Menu.Item name='drinks' active={activeItem === 'drinks'} onClick={() => this.showSearchOption('drinks')} />
            <Menu.Item name='arts' active={activeItem === 'arts'} onClick={() => this.showSearchOption('arts')} />
            <Menu.Item name='attractions' active={activeItem === 'attractions'} onClick={() => this.showSearchOption('attractions')} />
            <Menu.Item name='events' active={activeItem === 'events'} onClick={() => this.showSearchOption('events')} />
            <Menu.Item name='nightlife' active={activeItem === 'nightlife'} onClick={() => this.showSearchOption('nightlife')} />
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Foods />
        </Grid.Column>
      </Grid>
      







      // <div className='resultsPage'>
      //   <Container className='header'>
      //     <h1>Options</h1>
      //   </Container>

      //   <Container className='searchResults'>
      //     <Grid columns='three' divided>
      //       <Grid.Row stretched>
      //         <Grid.Column>
      //           <Segment> <SelectedOptions /> </Segment>
      //         </Grid.Column>

      //         <Grid.Column>
      //           <Segment> <Foods /> </Segment>
      //           <Segment> <Drinks /> </Segment>
      //           <Segment> <Events /> </Segment>
      //         </Grid.Column>

      //         <Grid.Column>
              
      //         </Grid.Column>
      //       </Grid.Row>
      //     </Grid>
      //   </Container>
      // </div>
   )
  }
}

export default ResultsPageContainer