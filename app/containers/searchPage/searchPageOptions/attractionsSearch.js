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
        {attraction: 'Parks', image: 'http://localhost:3000/images/attractions/park.jpg'},
        {attraction: 'Museums', image: 'http://localhost:3000/images/attractions/museum.jpg'}
      ],
      attractions2: [
        {attraction: 'Monuments', image: 'http://localhost:3000/images/attractions/monument.jpg'},
        {attraction: 'View Points', image: 'http://localhost:3000/images/attractions/viewpoint.jpg'}
      ],
      attractions3: [
        {attraction: 'Aquarium', image: 'http://localhost:3000/images/attractions/aquarium.jpg'},
        {attraction: 'Skyscrapers', image: 'http://localhost:3000/images/attractions/skyscraper.jpg'}
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
        <Grid columns='three'>
          <Grid.Column>
            {Object.values(this.state.attractions1).map((obj) => 
                <Segment compact textAlign='center' key={uuid()}>
                  <Image className='searchImage' src={obj.image} size='small'/>
                  <Button compact size='small' toggle active={this.active(obj.attraction)} 
                    onClick={() => this.props.toggleAttractions(obj.attraction)}>{obj.attraction}</Button>
                </Segment>
            )}
          </Grid.Column>

          <Grid.Column>
            {Object.values(this.state.attractions2).map((obj) => 
              <Segment compact textAlign='center' key={uuid()}>
                <Image className='searchImage' src={obj.image} size='small'/>
                <Button compact size='small' toggle active={this.active(obj.attraction)} 
                  onClick={() => this.props.toggleAttractions(obj.attraction)}>{obj.attraction}</Button>
              </Segment>
            )}
          </Grid.Column>

          <Grid.Column>
            {Object.values(this.state.attractions3).map((obj) => 
              <Segment compact textAlign='center' key={uuid()}>
                <Image className='searchImage' src={obj.image} size='small'/>
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

