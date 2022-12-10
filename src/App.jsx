import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import HomePage from './components/HomePage';
import OrderPage from './components/OrderPage';
import CheckoutPage from './components/CheckoutPage';

import FoodItems from './Data/FoodItems';
import { Header } from './components/Header';

export class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      order: [],
      menu: this.getMenu(),
    };
  }

  addToOrder(item, servingSize) {
    let order = this.state.order;
    let desiredItem = order.find((orderItem) => orderItem.id === item.id);

    if (desiredItem) {
      desiredItem.quantity = servingSize / item.serving;
    } else {
      item.quantity = servingSize / item.serving;
      order.push(item);
    }

    this.setState({
      order: order,
    });
  }

  getMenu() {
    return FoodItems.filter(
      (item) => item.availableOnDay === new Date().getDay()
    );
  }

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route
            path="/order"
            element={<OrderPage orderItems={this.state.order}></OrderPage>}
          />
          <Route
            path="/"
            element={
              <HomePage
                menu={this.state.menu}
                onClick={(item, quantity) => this.addToOrder(item, quantity)}
              ></HomePage>
            }
          />
        </Routes>
      </BrowserRouter>
    );
  }
}
