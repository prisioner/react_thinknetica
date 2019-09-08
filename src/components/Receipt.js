import React from 'react';

import Calc from '~/src/modules/Calc';

import ReceiptItem from '~/src/components/ReceiptItem';

class Receipt extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  componentDidMount() {
    const items = [
      { name: "Хлеб",   price: 25.9,  count: 1 },
      { name: "Молоко", price: 66.9,  count: 2 },
      { name: "Масло",  price: 179.9, count: 1 }
    ];

    this.setState({ items });
  }

  total() {
    let sum = 0;
    this.state.items.forEach((item) => (sum = Calc.sum(sum, new ReceiptItem(item).total())));

    return sum;
  }

  render() {
    const { items } = this.state;

    return(
      <div style={{fontFamily: 'Courier'}}>
        <ul>
          {items.map((item) => (
            <li>
              <ReceiptItem name={item.name} price={item.price} count={item.count} />
            </li>
          ))}

          <li>
            <div>
              <p>ИТОГО{this.total().toString().padStart(35, ".")}</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Receipt;
