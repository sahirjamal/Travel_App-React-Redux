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
        {drink: 'Coffee', image: 'http://www.menshealth.com/sites/menshealth.com/files/coffee-mug.jpg'},
        {drink: 'Tea', image: 'http://www.natashaspierogi.com/wp-content/uploads/2016/05/Tea.jpg'},
        {drink: 'Smoothies', image: 'http://afewdollarsmore.com/wp-content/uploads/2015/03/smoothies-2.jpg'}
      ],
      drinks2: [
        {drink: 'Cocktails', image: 'https://cdn.liquor.com/wp-content/uploads/2015/03/hub_classic_cocktail_margarita.jpg'},
        {drink: 'Wine & Spirits', image: 'http://www.aflightofwineandspirits.com/wp-content/themes/flightofwine/images/wine-bottles.jpg'},
        {drink: 'Beer', image: 'http://cdn0.wideopencountry.com/wp-content/uploads/2017/04/beer-793x526.jpg'}
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
        <Grid columns='two'>
          <Grid.Column>
            {Object.values(this.state.drinks1).map((obj) => 
                <Segment compact textAlign='center' key={uuid()}>
                  <Image src={obj.image} size='small'/>
                  <Button compact size='small' toggle active={this.active(obj.drink)} 
                    onClick={() => this.props.toggleDrinks(obj.drink)}>{obj.drink}</Button>
                </Segment>
            )}
          </Grid.Column>

          <Grid.Column>
            {Object.values(this.state.drinks2).map((obj) => 
              <Segment compact textAlign='center' key={uuid()}>
                <Image src={obj.image} size='small'/>
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
