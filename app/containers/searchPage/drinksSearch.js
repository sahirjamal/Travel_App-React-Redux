import React from 'react';
import { connect } from 'react-redux';

import Styling from '../../styling/searchPage.css';
import Flexbox from 'flexbox-react';
import { Button } from 'semantic-ui-react';
import { toggleDrinks } from '../../actions/index';

import searchReducer from '../../reducers/searchReducer';

class Drinks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drinks: ['Coffee', 'Tea', 'Smoothies', 'Cocktails', 'Wine & Spirits', 'Beer']
    }
  }
  render() {
    return (
      <div className='Drinks'>
        <h3>Drinks</h3>
          {this.state.drinks.map((drink) => 
            <Button basic color='blue' size='mini' onClick={() => this.props.toggleDrinks(drink)} key={drink}>{drink}</Button>)}
      </div>
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
