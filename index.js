import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import Receipt from '~/src/components/Receipt';

class App extends Component {
  render() {
    return(
      <div>
        <Receipt />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
