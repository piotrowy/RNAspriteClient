import React from 'react';
import Matrix from './../utils/Matrix';

class MatrixView extends React.Component {
  render() {
    return (
      <div id="heatMap"></div>
    );
  }

  componentDidMount() {
    switch (this.props.tabs.name) {
      case 'DISTANCES':
        Matrix.create("heatMap", 'Distances Matrix', this.props.session.matrix);
      default:
        Matrix.create("heatMap", 'Torsion Angles Matrix', this.props.session.matrix);
    }
  }
}

export default MatrixView;
