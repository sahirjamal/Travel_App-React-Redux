import React from 'react';
import Styling from '../../styling/resultsPage.css';
import Flexbox from 'flexbox-react';
import axios from 'axios';
import yelp from 'yelp-fusion';


class FoodsResults extends React.Component {
  render() {
    return (
      <div className='FoodsResults'>
        <h3>Foods</h3> 
        {axios.get('/api/food').then((response) => console.log(response))}
      </div>
    )
  }
}

export default FoodsResults

