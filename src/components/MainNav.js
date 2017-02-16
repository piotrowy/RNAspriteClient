import React from 'react';
import styled from 'styled-components';

const Navigation = styled.div`
  background-color: #00897b;
  height: 6vh;
  vertical-align: middle;
`;

const NavItem = styled.li`
    text-align: center;
    display: inline;
    height: 6vh;
    width: auto;
    padding: 1vh;
    color: white;
`;

const tabs = {
  'HOME': 1,
  'TORSION_ANGLES': 2,
  'DISTANCES': 3,
  'BATCH_MODE': 4,
};

const List = styled.ul`
  margin: 0;
`;

class MainNav extends React.Component {

  switchTab(item, event) {
    console.log(this.props)
    if (item !== this.props.name) {
      this.props.switchTab(item)
    }
  }

  render() {
    return (
      <Navigation>
        <List activeKey={tabs[this.props.name]}>
          <NavItem onClick={this.switchTab.bind(this, "HOME")} eventKey={1}>
            <a>Home</a>
          </NavItem>
          <NavItem onClick={this.switchTab.bind(this, "TORSION_ANGLES")} eventKey={2}>
            <a href="#">Torsion angles</a>
          </NavItem>
          <NavItem onClick={this.switchTab.bind(this, "DISTANCES")} eventKey={3}>
            <a href="#">Distances</a>
          </NavItem>
          <NavItem onClick={this.switchTab.bind(this, "BATCH_MODE")} eventKey={4}>
            <a href="#">Batch mode</a>
          </NavItem>
        </List>
      </Navigation>
    );
  }
}

export default MainNav