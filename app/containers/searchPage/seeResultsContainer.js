import React from 'react';
import Styling from '../../styling/searchPageContainer.css';
import Flexbox from 'flexbox-react';
import { Button } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { navigate } from '../../actions/index';
import paths from '../../paths_config';

class SeeResults extends React.Component {
  render() {
    return (
      <div className='seeResultsButton'>
            <Button size='large' onClick={()=>{this.props.navigate(paths.RESULTS)}} key='seeResultsKey'>See Results</Button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (route) => (dispatch(navigate(route)))
  }
}


export default connect(
  null, 
  mapDispatchToProps
)(SeeResults)