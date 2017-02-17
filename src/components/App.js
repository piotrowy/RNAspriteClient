import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import MainNav from '../containers/NavContainer'
import Main from './../containers/MainContainer'
import Header from './../components/Header'
import Footer from './../components/Footer'

class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <Header />
          <main>
            <MainNav />
            <Main />
          </main>
          <Footer />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App