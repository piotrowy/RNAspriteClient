import React from 'react';

import Home from './Home'
import DistancesConfiguration from '../containers/DistancesConfiguration'
import TorsionAnglesConfiguration from '../containers/TorsionAnglesConfiguration'
import MatrixView from '../containers/MatrixView'
import Input from '../containers/Input'
import InputMode from '../containers/InputMode'

class Main extends React.Component {
  render() {
    switch (this.props.name) {
      case 'HOME':
        return (
          <Home />
        );
      case 'BATCH_MODE':
      case 'INPUT':
        return (
          <Input />
        );
      case 'CONFIGURATION':
        if (this.props.computationalMode === 'DISTANCES') {
          return (
            <DistancesConfiguration />
          );
        } else {
          return (
            <TorsionAnglesConfiguration />
          );
        }
      case 'MATRIX_VIEW':
        return (
          <MatrixView />
        );
      case 'ERROR':
        return (
          <div>ERROR</div>
        );
      default:
        return (
          <InputMode />
        );
    }
  }
}

export default Main