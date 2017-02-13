import React from 'react';
import { Button } from 'react-bootstrap';

class InputMode extends React.Component {
  setInputMode(item, event) {
    if (item !== this.props.name) {
      this.props.setInputMode(item, 'INPUT')
    }
  }

  render() {
    return (
      <main>
        <div className="middle">
          <Button onClick={this.setInputMode.bind(this, "PDB_ID")}>Pdb Id</Button>
          <Button onClick={this.setInputMode.bind(this, "FILE")}>File</Button>
        </div>
      </main>
    );
  }
}

export default InputMode