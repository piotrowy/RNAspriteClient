import React from 'react';

class InputMode extends React.Component {
  setInputMode(item, event) {
    if (item !== this.props.name) {
      this.props.setInputMode(item, 'INPUT')
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.setInputMode.bind(this, "PDB_ID")}>Pdb Id</button>
        <button onClick={this.setInputMode.bind(this, "FILE")}>File</button>
      </div>
    );
  }
}

export default InputMode