import React from 'react';
import Styling from '../../../styling/searchPageContainer.css';
import Flexbox from 'flexbox-react';
import { Button } from 'semantic-ui-react';
import axios from 'axios';

import { connect } from 'react-redux';
import { navigate } from '../../../actions/index';
import paths from '../../../paths_config';

class SeeResults extends React.Component {

clickHandler() {
  this.props.navigate(paths.RESULTS);

  axios({
    url:'http://localhost:3000/api/food',
    method: 'post',
    data: {
      state: this.props.state,
    }
  }).then((response) => console.log(response)).catch((e) => console.log(e))
}

  render() {
    return (
      <div className='seeResultsButton'>
            <Button size='large' onClick={()=>{this.clickHandler()}} key='seeResultsKey'>See Results</Button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    state: state
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (route) => (dispatch(navigate(route)))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SeeResults)
