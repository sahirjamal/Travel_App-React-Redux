import React from 'react';
import { connect } from 'react-redux';

import Styling from '../../styling/searchOptions.css';
import Flexbox from 'flexbox-react';
import { Button } from 'semantic-ui-react';
import { toggleDrinks } from '../../actions/index';

import searchReducer from '../../reducers/searchReducer';

class Drinks extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drinks: ['Coffee', 'Tea', 'Smoothies', 'Cocktails', 'Wine & Spirits', 'Beer'],
      active: {
        'Coffee': false,
        'Tea': false,
        'Smoothies': false,
        'Cocktails': false,
        'Wine & Spirits': false,
        'Beer': false,
      }
    }
  }

  toggleAndActive(key) {
    this.props.toggleDrinks(key)

    let newState = this.state.active;
    newState[key] = !this.state.active[key];
    this.setState({active: newState});
  }

  render() {
    const { active } = this.state;
    return (
      <div className='drinks'>
        <h3 className='drinksTitle'>Drinks</h3>
          {this.state.drinks.map((drink) => 
            <Button color='teal' toggle active={active[drink]} size='mini' 
              onClick={() => this.toggleAndActive(drink)} key={drink}>{drink}</Button>)}
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
