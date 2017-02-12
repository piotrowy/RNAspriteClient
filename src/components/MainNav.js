import React from 'react';
import {nav, Button} from 'react-materialize';

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
        <nav className="teal">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo logoDiv">LOGO</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li><a onClick={this.switchTab.bind(this, "HOME")}>Home</a></li>
              <li><a onClick={this.switchTab.bind(this, "TORSION_ANGLES")}>Torsion angles</a></li>
              <li><a onClick={this.switchTab.bind(this, "DISTANCES")}>Distances</a></li>
              <li><a onClick={this.switchTab.bind(this, "BATCH_MODE")}>Batch mode</a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default MainNav