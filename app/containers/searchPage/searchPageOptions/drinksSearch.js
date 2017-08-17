import React from 'react';
import { connect } from 'react-redux';
import Styling from '../../../styling/searchOptions.css';
import _ from 'underscore';

import { Grid, Container, Button, Image, Segment} from 'semantic-ui-react';
import { toggleDrinks } from '../../../actions/index';
import uuid from 'uuid/v4';

class Drinks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drinks1: [
        {drink: 'Coffee', image: 'http://localhost:3000/images/drinks/coffee.jpg'},
        {drink: 'Tea', image: 'http://localhost:3000/images/drinks/tea.jpg'},
      ],
      drinks2: [
        {drink: 'Smoothies', image: 'http://localhost:3000/images/drinks/smoothie.jpg'},
        {drink: 'Cocktails', image: 'http://localhost:3000/images/drinks/cocktail.jpg'},
      ],
      drinks3: [
        {drink: 'Wine & Spirits', image: 'http://localhost:3000/images/drinks/wine.jpg'},
        {drink: 'Beer', image: 'http://localhost:3000/images/drinks/beer.jpg'}
      ]
    }
  }

  active(drink) {
    if (_.contains(this.props.drinks, drink)) { 
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <Container className='drinks'>
        <Grid columns='three'>
          <Grid.Column>
            {Object.values(this.state.drinks1).map((obj) => 
                <Segment compact textAlign='center' key={uuid()}>
                  <Image className='searchImage' src={obj.image} size='small'/>
                  <Button compact size='small' toggle active={this.active(obj.drink)} 
                    onClick={() => this.props.toggleDrinks(obj.drink)}>{obj.drink}</Button>
                </Segment>
            )}
          </Grid.Column>

          <Grid.Column>
            {Object.values(this.state.drinks2).map((obj) => 
              <Segment compact textAlign='center' key={uuid()}>
                <Image className='searchImage' src={obj.image} size='small'/>
                <Button compact size='small' toggle active={this.active(obj.drink)} 
                  onClick={() => this.props.toggleDrinks(obj.drink)}>{obj.drink}</Button>
              </Segment>
            )}
          </Grid.Column>

          <Grid.Column>
            {Object.values(this.state.drinks3).map((obj) => 
              <Segment compact textAlign='center' key={uuid()}>
                <Image className='searchImage' src={obj.image} size='small'/>
                <Button compact size='small' toggle active={this.active(obj.drink)} 
                  onClick={() => this.props.toggleDrinks(obj.drink)}>{obj.drink}</Button>
              </Segment>
            )}
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    drinks: state.searchReducer.drinks,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleDrinks: (drink) => (dispatch(toggleDrinks(drink)))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Drinks)
