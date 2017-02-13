import React from 'react';
import Matrix from './../utils/Matrix';
import { Button } from 'react-bootstrap';

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
      <main>
        <form onSubmit={this.send.bind(this)}>
          <input id="email" type="text" required/>
          <Button type="submit">Send</Button>
        </form>
        <Button onClick={this.download.bind(this)}>Download</Button>
        <div id="heatMap"></div>
      </main>
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
