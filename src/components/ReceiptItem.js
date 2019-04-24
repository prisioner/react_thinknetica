import React from 'react';

import Calc from '~/src/modules/Calc';

class ReceiptItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ...props,
      filler: ".",
      maxLength: 40
    };
  }

  fillLength(endPart) {
    return this.state.maxLength - endPart.length;
  }

  total() {
    return Calc.multiply(this.state.price, this.state.count);
  }

  filledString(startPart, endPart, filler) {
    return startPart.padEnd(this.fillLength(endPart), filler) + endPart;
  }

  render() {
    const { name, count, price, filler } = this.state;
    const formattedCount = `${count} шт.`;

    return(
      <div>
        <p>{this.filledString(name, formattedCount, filler)}</p>
        <p>{this.filledString(`${price} x ${count}`, this.total().toString(), filler)}</p>
        <p>{this.filledString('', '', '-')}</p>
      </div>
    );
  }
}

export default ReceiptItem;
