import React from 'react';

import Home from './Home'
import Error from '../components/Error'
import Input from '../containers/Input'
import InputMode from '../containers/InputMode'
import MatrixView from '../containers/MatrixView'
import DistancesConfiguration from '../containers/DistancesConfiguration'
import TorsionAnglesConfiguration from '../containers/TorsionAnglesConfiguration'

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
          <Error />
        );
      default:
        return (
          <InputMode />
        );
    }
  }
}

export default Main