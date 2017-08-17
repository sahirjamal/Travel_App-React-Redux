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
        {art: 'Comedy Shows', image: 'http://localhost:3000/images/arts/comedy.jpg'},
        {art: 'Theatre', image: 'http://localhost:3000/images/arts/theatre.jpg'}
      ],
      arts2: [
        {art: 'Art Galleries', image: 'http://localhost:3000/images/arts/artGallery.jpg'},
        {art: 'Music Venues', image: 'http://localhost:3000/images/arts/musicVenue.jpg'}
      ],
      arts3: [
        {art: 'Opera', image: 'http://localhost:3000/images/arts/opera.jpg'},
        {art: 'Dance', image: 'http://localhost:3000/images/arts/dance.jpg'}
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
        <Grid columns='three'>
          <Grid.Column>
            {Object.values(this.state.arts1).map((obj) => 
                <Segment compact textAlign='center' key={uuid()}>
                  <Image className='searchImage' src={obj.image} size='small'/>
                  <Button compact size='small' toggle active={this.active(obj.art)} 
                    onClick={() => this.props.toggleArts(obj.art)}>{obj.art}</Button>
                </Segment>
            )}
          </Grid.Column>

          <Grid.Column>
            {Object.values(this.state.arts2).map((obj) => 
              <Segment compact textAlign='center' key={uuid()}>
                <Image className='searchImage' src={obj.image} size='small'/>
                <Button compact size='small' toggle active={this.active(obj.art)} 
                  onClick={() => this.props.toggleArts(obj.art)}>{obj.art}</Button>
              </Segment>
            )}
          </Grid.Column>

          <Grid.Column>
            {Object.values(this.state.arts3).map((obj) => 
              <Segment compact textAlign='center' key={uuid()}>
                <Image className='searchImage' src={obj.image} size='small'/>
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

