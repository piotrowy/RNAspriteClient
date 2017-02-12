import React from 'react';

class InputMode extends React.Component {
  setInputMode(item, event) {
    if (item !== this.props.name) {
      this.props.setInputMode(item, 'INPUT')
    }
  }

  render() {
    return (
      <main>
        <div className="container">
          <a className="waves-effect waves-light btn-large" onClick={this.setInputMode.bind(this, "PDB_ID")}>Pdb Id</a>
          <a className="waves-effect waves-light btn-large" onClick={this.setInputMode.bind(this, "FILE")}>File</a>
        </div>
      </main>
    );
  }
}

export default InputMode