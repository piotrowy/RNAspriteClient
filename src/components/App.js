import React from 'react';

import MainNav from '../containers/NavContainer'
import Main from './../containers/MainContainer'
import Header from './../components/Header'
import Footer from './../components/Footer'

class App extends React.Component {

  render() {
    return (
        <div>
          <Header />
          <main>
            <MainNav />
            <Main />
          </main>
          <Footer />
        </div>
    );
  }
}

export default App