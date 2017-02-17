import React from 'react';
import styled from 'styled-components'
import Background from './../figures/brokendna.png';

const Title = styled.h1`
  margin: auto;
  font-size: 4.5em;
`;

const ErrorWrapper = styled.div`
  vertical-align: middle;
  align-items: center;
  display: flex;
  min-height: inherit;
  margin: auto;
  background-image:url(${Background});
  background-size:88vh;
  background-position: center; 
  background-repeat: no-repeat;
`;

class Error extends React.Component {
  render() {
    return (
      <ErrorWrapper>
        <Title>404 Error</Title>
      </ErrorWrapper>
    );
  }
}

export default Error