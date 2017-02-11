import React from 'react';

import Home from './Home'
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
        return (
          <Input />
        );
      default:
        return (
          <InputMode />
        );
    }
  }
}

export default Main