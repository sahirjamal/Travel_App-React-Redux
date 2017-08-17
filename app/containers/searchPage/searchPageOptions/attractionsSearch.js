import React from 'react';
import { connect } from 'react-redux';
import Styling from '../../../styling/searchOptions.css';
import _ from 'underscore';

import { Grid, Container, Button, Image, Segment} from 'semantic-ui-react';
import { toggleAttractions } from '../../../actions/index';
import uuid from 'uuid/v4';

class Attractions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      attractions1: [
        {attraction: 'Parks', image: 'http://dreamatico.com/data_images/park/park-1.jpg'},
        {attraction: 'Museums', image: 'http://www.thedoubleclicks.com/wp-content/uploads/2016/12/museums1fourseasons.jpg'}
      ],
      attractions2: [
        {attraction: 'Landmarks', image: 'http://www.newkidscenter.com/images/10415715/Statue_of_Liberty.jpg'},
        {attraction: 'View Points', image: 'https://media-cdn.tripadvisor.com/media/photo-s/03/4e/3a/91/seethargundu-viewpoint.jpg'}
      ]
    }
  }

  active(attraction) {
    if (_.contains(this.props.attractions, attraction)) { 
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <Container className='attractions'>
        <Grid columns='two'>
          <Grid.Column>
            {Object.values(this.state.attractions1).map((obj) => 
                <Segment compact textAlign='center' key={uuid()}>
                  <Image src={obj.image} size='small'/>
                  <Button compact size='small' toggle active={this.active(obj.attraction)} 
                    onClick={() => this.props.toggleAttractions(obj.attraction)}>{obj.attraction}</Button>
                </Segment>
            )}
          </Grid.Column>

          <Grid.Column>
            {Object.values(this.state.attractions2).map((obj) => 
              <Segment compact textAlign='center' key={uuid()}>
                <Image src={obj.image} size='small'/>
                <Button compact size='small' toggle active={this.active(obj.attraction)} 
                  onClick={() => this.props.toggleAttractions(obj.attraction)}>{obj.attraction}</Button>
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
    attractions: state.searchReducer.attractions,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleAttractions: (attraction) => (dispatch(toggleAttractions(attraction)))
  }
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Attractions)

