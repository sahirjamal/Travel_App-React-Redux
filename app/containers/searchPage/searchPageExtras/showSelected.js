import React from 'react';
import { connect } from 'react-redux';
import _ from 'underscore';
import Styling from '../../../styling/searchPageContainer.css';

import { Grid, Container, Segment, List, Header} from 'semantic-ui-react';
import uuid from 'uuid/v4';
import searchReducer from '../../../reducers/searchReducer';

let values;

class ShowSelected extends React.Component {

 selected() {
   let selectedChoices = [];
   Object.values(this.props.state).map((array) => {
     selectedChoices.push(array);
   });
   values = _.flatten(selectedChoices);
 }

  render() {
    return(
      <Container className='selectedOptions'>
        <Grid.Row stretched>
          <Header as='h4' textAlign='center' className='selectedOptionsTitle'>Whatchu lookin for?</Header>
          {this.selected()}
          <List floated='right' className='selectedList' items={values} />
        </Grid.Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    state: state.searchReducer,
  }
}

export default connect(
  mapStateToProps, 
  null
)(ShowSelected)

