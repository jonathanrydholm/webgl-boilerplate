/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import styled from 'styled-components';
import WebGL from '../WebGL';

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Container = styled.div`
`;

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      checked: false,
    }

  }
  render(){
    return (
      <AppWrapper>
        <Container>
          <WebGL />
        </Container>
      </AppWrapper>
    );
  }
}
