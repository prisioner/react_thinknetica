import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import HelloWorld from '~/src/components/HelloWorld';

import Calc from '~/src/modules/Calc';

class App extends Component {
  render() {
    return(
      <div>
        <HelloWorld />
        <div>2 + 3 = {Calc.sum(2, 3)}</div>
        <div>2 - 3 = {Calc.subtract(2, 3)}</div>
        <div>2 * 3 = {Calc.multiply(2, 3)}</div>
        <div>3 / 2 = {Calc.divide(3, 2)}</div>
        <div>3 / 0 = {Calc.divide(3, 0)}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
