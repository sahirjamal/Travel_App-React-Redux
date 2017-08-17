import React from 'react';
import { connect } from 'react-redux';
import Styling from '../../../styling/searchOptions.css';
import _ from 'underscore';

import { Grid, Container, Button, Image, Segment} from 'semantic-ui-react';
import { toggleArts } from '../../../actions/index';
import uuid from 'uuid/v4';

class Arts extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      arts1: [
        {art: 'Comedy Shows', image: 'https://img.grouponcdn.com/deal/mcfAPXki3MvFR2nu7gAePM/114323563-2048x1229/v1/c700x420.jpg'},
        {art: 'Theatre', image: 'http://cdn1.theodysseyonline.com/files/2015/12/22/6358634780756009771241750938_arts51.jpg'}
      ],
      arts2: [
        {art: 'Art Galleries', image: 'http://theawesomedaily.com/wp-content/uploads/2017/01/art-gallery-feat.jpg'},
        {art: 'Music Venues', image: 'http://www.cirrusresearch.co.uk/blog/wp-content/uploads/2014/12/Music-Venues-Under-Threat.jpg'}
      ]
    }
  }

  active(art) {
    if (_.contains(this.props.arts, art)) { 
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <Container className='arts'>
        <Grid columns='two'>
          <Grid.Column>
            {Object.values(this.state.arts1).map((obj) => 
                <Segment compact textAlign='center' key={uuid()}>
                  <Image src={obj.image} size='small'/>
                  <Button compact size='small' toggle active={this.active(obj.art)} 
                    onClick={() => this.props.toggleArts(obj.art)}>{obj.art}</Button>
                </Segment>
            )}
          </Grid.Column>

          <Grid.Column>
            {Object.values(this.state.arts2).map((obj) => 
              <Segment compact textAlign='center' key={uuid()}>
                <Image src={obj.image} size='small'/>
                <Button compact size='small' toggle active={this.active(obj.art)} 
                  onClick={() => this.props.toggleArts(obj.art)}>{obj.art}</Button>
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
    arts: state.searchReducer.arts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleArts: (art) => (dispatch(toggleArts(art)))
  }
}


export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Arts)

