import React, { Component } from 'react';
import Aux from './hoc/Aux/Aux';
import Layout from './container/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Aux>
          <Layout />
      </Aux>
    );
  }
}

export default App;
