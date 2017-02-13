import React from 'react';
import {PageHeader, Nav, NavItem} from 'react-bootstrap';

const tabs = {
  'HOME': 1,
  'TORSION_ANGLES': 2,
  'DISTANCES': 3,
  'BATCH_MODE': 4,
}

class MainNav extends React.Component {

  switchTab(item, event) {
    console.log(this.props)
    if (item !== this.props.name) {
      this.props.switchTab(item)
    }
  }

  render() {
    return (
      <header>
        <PageHeader>RNAsprite</PageHeader>
        <Nav bsStyle="tabs" activeKey={tabs[this.props.name]} className="teal">
          <NavItem onClick={this.switchTab.bind(this, "HOME")} eventKey={1}>Home</NavItem>
          <NavItem onClick={this.switchTab.bind(this, "TORSION_ANGLES")} eventKey={2}>Torsion angles</NavItem>
          <NavItem onClick={this.switchTab.bind(this, "DISTANCES")} eventKey={3}>Distances</NavItem>
          <NavItem onClick={this.switchTab.bind(this, "BATCH_MODE")} eventKey={4}>Batch mode</NavItem>
        </Nav>
      </header>
    );
  }
}

export default MainNav