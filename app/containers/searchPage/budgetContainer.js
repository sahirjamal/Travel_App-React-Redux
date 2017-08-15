import React from 'react';
import { connect } from 'react-redux';

import Styling from '../../styling/searchPageContainer.css';
import Flexbox from 'flexbox-react';
import { Rating } from 'semantic-ui-react';
import { changeBudget } from '../../actions/index';

import budgetReducer from '../../reducers/budgetReducer';

class Budget extends React.Component {
  render() {
    return (
      <div className='budgetDiv'>
        <h4>Max Budget: ${this.props.budget}</h4>
        <input type='range' min={0} max={1000} value={this.props.budget} className='budgetSlider'
                            onChange={(e) => this.props.changeBudget(e.target.value)} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    budget: state.budgetReducer.budget,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeBudget: (budget) => (dispatch(changeBudget(budget)))
  }
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Budget)
