import React from 'react';
import { connect } from 'react-redux';
import Styling from '../styling/homePageContainer.css';

import { Container, Divider, Grid, Segment, Header, Button } from 'semantic-ui-react';
import { navigate } from '../actions/index';
import paths from '../paths_config';

class HomePageContainer extends React.Component {

render() {
    return (
      <div className='fullScreen'>
        <Container>
          <Button onClick={() => {this.props.navigate(paths.LOGIN)}}>Login</Button>
          <Button onClick={() => {this.props.navigate(paths.SIGNUP)}}>Signup</Button>
        </Container>
        <Container className='homeBody'>
          <h1 className='title'>Travel Buddy</h1>
          <h2 className='phrase'>Pack yo shit - let us pave the way.</h2>
          <Button color='blue' onClick={()=>{this.props.navigate(paths.SEARCH)}}>Travel Now</Button>
        </Container>
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
)(HomePageContainer)
