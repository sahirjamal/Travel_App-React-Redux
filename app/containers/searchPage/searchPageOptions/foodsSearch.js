import React from 'react';
import { connect } from 'react-redux';
import Styling from '../../../styling/searchOptions.css';
import _ from 'underscore';

import { Grid, Container, Button, Image, Segment} from 'semantic-ui-react';
import { toggleFoods } from '../../../actions/index';
import uuid from 'uuid/v4';

class Foods extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      foods1: [
        {food: 'Indian', image: 'http://assets.inhabitat.com/wp-content/blogs.dir/1/files/2016/03/Leftovers-for-Hungry-Indian-Food.jpg'},
        {food:'Chinese', image: 'http://rasamalaysia.com/wp-content/uploads/2007/11/kung-pao-chicken-thumb.jpg'},
        {food: 'Italian', image: 'https://img.grouponcdn.com/deal/svaEbpoNUoBT7TfQEQVi/Dj-440x267/v1/c700x420.jpg'}
      ],
      foods2: [
        {food: 'American', image: 'https://img.grouponcdn.com/deal/6g3vRDzgSdpiQQCucJCNAx/shutterstock_102088342-700x420/v1/c700x420.jpg'},
        {food: 'Vietnemese', image: 'http://www.seriouseats.com/images/2015/07/20150713-dorchester-max-falkowitz-9.jpg'},
        {food: 'Korean', image: 'http://www.rwsentosa.com/Portals/0/RWS%20Revamp/FNB/Insadong/Insadong-Bimbibap.jpg'}
      ],
      foods3: [
        {food: 'Thai', image: 'https://summercampthailand.com/wp-content/uploads/2016/06/Phad-Thai.jpg'},
        {food: 'Greek', image: 'https://i.pinimg.com/originals/60/5e/2f/605e2fb350c0741e3de3ee268ef6a6af.jpg'},
        {food: 'Vegetarian', image: 'http://i.ndtvimg.com/i/2017-01/vegetarian-dinner-620_620x350_51484918976.jpg'}
      ]
    }
  }

  active(food) {
    if (_.contains(this.props.foods, food)) { 
      return true;
    } else {
      return false;
    }
  }

  render() {
    return (
      <Container className='foods'>
        <Grid columns='three'>
          <Grid.Column>
            {Object.values(this.state.foods1).map((obj) => 
                <Segment compact textAlign='center' key={uuid()}>
                  <Image src={obj.image} size='small'/>
                  <Button compact size='small' toggle active={this.active(obj.food)} 
                    onClick={() => this.props.toggleFoods(obj.food)}>{obj.food}</Button>
                </Segment>
            )}
          </Grid.Column>

          <Grid.Column>
            {Object.values(this.state.foods2).map((obj) => 
              <Segment compact textAlign='center' key={uuid()}>
                <Image src={obj.image} size='small'/>
                <Button compact size='small' toggle active={this.active(obj.food)} 
                  onClick={() => this.props.toggleFoods(obj.food)}>{obj.food}</Button>
              </Segment>
            )}
          </Grid.Column>

          <Grid.Column>
            {Object.values(this.state.foods3).map((obj) => 
              <Segment compact textAlign='center' key={uuid()}>
                <Image src={obj.image} size='small'/>
                <Button compact size='small' toggle active={this.active(obj.food)} 
                  onClick={() => this.props.toggleFoods(obj.food)}>{obj.food}</Button>
              </Segment>
            )}
          </Grid.Column>
        </Grid>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    foods: state.searchReducer.foods,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggleFoods: (food) => (dispatch(toggleFoods(food)))
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Foods)