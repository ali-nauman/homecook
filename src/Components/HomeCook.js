import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from './HomePage';
import OrderPage from './OrderPage';

import FoodItems from '../Data/FoodItems';
import CheckoutPage from './CheckoutPage';

class HomeCook extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            orderItems: [],
            foodItems: this.getAvailableItems()
        };
    }

    addToOrder(item, servingSize) {
        let orderItems = this.state.orderItems;
        let desiredItem = orderItems.find(i => i.item.id === item.id);

        if (!desiredItem) {
            orderItems.push({
                item: item,
                quantity: servingSize / item.serving
            });
        } else {
            desiredItem.quantity = servingSize / item.serving;
        }

        this.setState({
            orderItems: orderItems
        });
    }

    getAvailableItems() {
        let menu = [];

        FoodItems.forEach((item) => {
            if (item.availableOnDay === new Date().getDay()) { menu.push(item); }
        })

        return menu;
    }

    render() {
        return (
            <Router>
                <Navbar bg="dark" expand="lg">
                    <Navbar.Brand className="text-white mt-1">HomeCook</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className="text-light mt-2 mx-2" to="/">Home</Link>
                            <Link className="text-light mt-2 mx-2" to="/order">Order</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>

                <Switch>
                    <Route path="/checkout">
                        <CheckoutPage></CheckoutPage>
                    </Route>

                    <Route path="/order">
                        <OrderPage orderItems={this.state.orderItems}></OrderPage>
                    </Route>

                    <Route path="/">
                        <HomePage foodItems={this.state.foodItems} onClick={(item, quantity) => this.addToOrder(item, quantity)}></HomePage>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default HomeCook;