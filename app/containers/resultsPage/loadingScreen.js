import React from 'react';
import { Dimmer, Loader, Menu, Container, Segment, Divider, Grid, Header } from 'semantic-ui-react';

class Loading extends React.Component {
  render() {
    return (
      <Segment>
        <Dimmer active>
          <Loader />
        </Dimmer>
      </Segment>
    );
  }
}

export default Loading