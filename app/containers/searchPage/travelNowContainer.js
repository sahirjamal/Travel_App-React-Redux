import React from 'react';
import Styling from '../../styling/searchPage.css';
import Flexbox from 'flexbox-react';
import { Button } from 'semantic-ui-react';

import { connect } from 'react-redux';
import { navigate } from '../../actions/index';
import paths from '../../paths_config';

class TravelNow extends React.Component {
  render() {
    return (
      <div className='travelNowButton'>
            <Button size='large' onClick={()=>{this.props.navigate(paths.RESULTS)}} key='travelNowButton'>Travel Now!</Button>
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
)(TravelNow)