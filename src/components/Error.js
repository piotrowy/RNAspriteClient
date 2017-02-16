import React from 'react';
import styled from 'styled-components'
import Background from './../figures/brokendna.png';

const Title = styled.h1`
  margin: auto;
  font-size: 6.5em;
`;

const ErrorWrapper = styled.div`
  vertical-align: middle;
  align-items: center;
  display: flex;
  height: inherit;
  background-image:url(${Background});
  background-size:80vh;
  background-position: center; 
  background-repeat: no-repeat;
`;

class Error extends React.Component {
  render() {
    return (
      <main>
        <ErrorWrapper>
          <Title>404 Error</Title>
        </ErrorWrapper>
      </main>
    );
  }
}

export default Error