import React from 'react';
import styled from 'styled-components';

const MyHeader = styled.div`
  vertical-align: middle;
  align-items: center;
  display: flex;
  background-color: #00695c;
  padding: 1vh;
  height: 12vh;
  color: white;
`;

class Header extends React.Component {
  render() {
    return (
      <header>
        <MyHeader>
          <h4>RNAsprite - a tool to calculate RNA structural data</h4>
        </MyHeader>
      </header>
    );
  }
}

export default Header