import React from 'react';
import styled from 'styled-components';

const Navigation = styled.div`
  background-color: #00897b;
  height: 6vh;
  vertical-align: middle;
`;

const tabs = {
  'HOME': 1,
  'TORSION_ANGLES': 2,
  'DISTANCES': 3,
  'BATCH_MODE': 4,
};

class MainNav extends React.Component {

  switchTab(item, event) {
    if (item !== this.props.name) {
      this.props.switchTab(item)
    }
  }

  render() {
    return (
        <nav>
          <Navigation className="nav-wrapper">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <a onClick={this.switchTab.bind(this, "HOME")} value="HOME">Home</a>
              </li>
              <li>
                <a onClick={this.switchTab.bind(this, "TORSION_ANGLES")} value="TORSION_ANGLES">Torsion Angle Matrix</a>
              </li>
              <li>
                <a onClick={this.switchTab.bind(this, "DISTANCES")} value="DISTANCES">Atom Distances</a>
              </li>
              <li>
                <a onClick={this.switchTab.bind(this, "BATCH_MODE")} value="BATCH_MODE">Batch mode</a>
              </li>
            </ul>
          </Navigation>
        </nav>
    );
  }
}

export default MainNav