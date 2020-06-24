import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from './HomePage';
import OrderPage from './OrderPage';
import CheckoutPage from './CheckoutPage';

import FoodItems from '../Data/FoodItems';

class HomeCook extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            order: [],
            menu: this.getMenu()
        };
    }

    addToOrder(item, servingSize) {
        let order = this.state.order;
        let desiredItem = order.find(orderItem => orderItem.id === item.id);

        if (desiredItem) {
            desiredItem.quantity = servingSize / item.serving;
        } else {
            item.quantity = servingSize / item.serving;
            order.push(item);
        }

        this.setState({
            order: order
        });
    }

    getMenu() {
        return FoodItems.filter(item => item.availableOnDay === new Date().getDay())
    }

    render() {
        return (
            <Router>
                <Navbar bg="dark" expand="lg" className="navbar-dark">
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
                        <OrderPage orderItems={this.state.order}></OrderPage>
                    </Route>

                    <Route path="/">
                        <HomePage menu={this.state.menu} onClick={(item, quantity) => this.addToOrder(item, quantity)}></HomePage>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default HomeCook;