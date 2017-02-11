import React from 'react';

import MainNav from '../containers/NavContainer'
import Main from './../containers/MainContainer'

class App extends React.Component {

  render() {
    return (
      <div>
        <MainNav />
        <Main />
      </div>
    );
  }
}

export default App