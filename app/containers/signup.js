import React from 'react';
import { connect } from 'react-redux';
import Styling from '../styling/login.css';

import { Container, Form, Grid, Segment, Header, Button } from 'semantic-ui-react';
import firebase from '../firebase';

const auth = firebase.auth();

class Signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }
  }

  enterEmail(e) {
    let newState = this.state.email;
    newState = e.target.value;
    this.setState({email: newState})
  }

  enterPassword(e) {
    let newState = this.state.password;
    newState = e.target.value;
    this.setState({password: newState})
  }

  authenticate() {
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {console.log(error)});
  }

  render() {
    return (
      <Container className='signupPage'>
        <Form>
          <Form.Field>
            <label>Email</label>
            <input placeholder='Email' value={this.state.email} onChange={(e) => this.enterEmail(e)} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type='password' placeholder='Password' value={this.state.password} onChange={(e) => this.enterPassword(e)} />
          </Form.Field>
          <Button onClick={() => {this.authenticate()}} type='submit'>Signup</Button>
        </Form>
      </Container>
    )
  }
}

export default Signup