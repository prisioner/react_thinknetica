import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import HelloWorld from '~/src/components/HelloWorld';

class App extends Component {
  render() {
    return(
      <HelloWorld />
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
