import React from 'react';
import styled from 'styled-components';
import { InitGL } from '../WebGL/index';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > * {
    border: 1px solid #ccc;
  }
`;

export default class Game extends React.Component {
  componentDidMount() {
    InitGL('game');
  }

  render() {
    return (
      <Wrapper>
        <canvas width="640" height="480" id="game" />
      </Wrapper>
    );
  }
}
