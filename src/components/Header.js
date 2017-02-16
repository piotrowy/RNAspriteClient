import React from 'react';
import styled from 'styled-components';

const MyHeader = styled.div`
  vertical-align: middle;
  align-items: center;
  display: flex;
  background-color: #00695c;
  padding: 1vh;
  height: 14vh;
  color: white;
`;

const Content = styled.h1`
  font-size: 6vh;
  margin: 0;
`;

const a = {
  color: 'white'
};

class Header extends React.Component {
  render() {
    return (
      <header>
        <MyHeader>
          <Content>RNAsprite - a tool to calculate RNA structural data</Content>
        </MyHeader>
      </header>
    );
  }
}

export default Header