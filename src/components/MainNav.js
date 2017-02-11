import React from 'react';

import {Nav, NavItem} from 'react-bootstrap';

class MainNav extends React.Component {

  switchTab(item, event) {
    console.log(this.props)
    if (item !== this.props.name) {
      this.props.switchTab(item)
    }
  }

  render() {
    return (
      <div>
        <Nav bsStyle="tabs" activeKey={0} className="main-nav">
          <NavItem eventKey={0} onClick={ this.switchTab.bind(this, "HOME") }>Home</NavItem>
          <NavItem eventKey={1} onClick={ this.switchTab.bind(this, "TORSION_ANGLES") }>Torsion angles</NavItem>
          <NavItem eventKey={2} onClick={ this.switchTab.bind(this, "DISTANCES") }>Distances</NavItem>
          <NavItem eventKey={3} onClick={ this.switchTab.bind(this, "BATCH_MODE") }>Batch mode</NavItem>
        </Nav>
      </div>
    );
  }
}

export default MainNav