import React from 'react';
import Matrix from './../utils/Matrix';
import RaisedButton from 'material-ui/RaisedButton';

class MatrixView extends React.Component {

  send(event) {
    event.preventDefault();
    this.props.sendEmail(this.props.session.key, document.getElementById("email").value);
  }

  download() {
    this.props.download(this.props.session.key);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.send.bind(this)}>
          <input id="email" type="text" required/>
          <RaisedButton label="Submit" labelColor="#ffffff" backgroundColor="#00897b" type="submit"/>
        </form>
        <a href={'/matrix/csv/' + this.props.session.key} download="matrix">Download</a>
        <div id="heatMap"></div>
      </div>
    );
  }

  componentDidMount() {
    switch (this.props.tabs.computationalMode) {
      case 'DISTANCES':
        Matrix.createDistancesMatrixChart("heatMap", 'Distances Matrix', this.props.session.matrix);
        break;
      case 'TORSION_ANGLES':
        Matrix.createTorsionAnglesMatrixChart("heatMap", 'Torsion Angles Matrix', this.props.session.matrix);
        break;
    }
  }
}

export default MatrixView;
