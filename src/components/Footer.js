import React from 'react';
import styled from 'styled-components';

const MyFooter = styled.div`
  vertical-align: middle;
  align-items: center;
  display: flex;
  background-color: #00695c;
  padding: 2vh;
  height: 20vh;
  color: white;
`;

const Content = styled.div`
  margin: auto;
`;

const a = {
  color: 'white'
};

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <MyFooter>
          <Content>
            <p>Author: Piotr Ceranek</p>
            <p>Email: petr.ceranek[at]gmail.com</p>
          </Content>
          <Content>
            <p><a style={a} href="https://www.put.poznan.pl/">Poznań University of Technology</a></p>
            <p><a style={a} href="http://fc.put.poznan.pl/index.php">Faculty of Computing</a></p>
          </Content>
          <Content>
            <img style={{height: 16 + 'vh', width: 16 + 'vh'}} src="./../figures/politechnika_white.png" alt="Politechnika Poznańska"/>
          </Content>
        </MyFooter>
      </footer>
    );
  }
}

export default Footer