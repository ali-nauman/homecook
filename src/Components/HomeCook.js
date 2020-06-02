import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from './Home';
import Order from './Order';

import FoodItems from '../Data/FoodItems';

class HomeCook extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            orderItems: [],
            foodItems: this.getAvailableItems()
        }
    }

    addToOrder(item, quantity) {
        console.log(item, quantity);
        // let orderItems = this.state.orderItems;
        // let desiredItem = orderItems.find(i => i.item.id === item.id);

        // if (desiredItem) {
        //     ++desiredItem.quantity;
        // }
        // else {
        //     orderItems.push({
        //         item: item,
        //         quantity: 1
        //     })
        // }

        // this.setState({
        //     orderItems: orderItems
        // });
    }

    // addToOrder(item) {
    //     let orderItems = this.state.orderItems;
    //     let desiredItem = orderItems.find(i => i.item.id === item.id);

    //     if (desiredItem) {
    //         ++desiredItem.quantity;
    //     }
    //     else {
    //         orderItems.push({
    //             item: item,
    //             quantity: 1
    //         })
    //     }

    //     this.setState({
    //         orderItems: orderItems
    //     });
    // }

    getAvailableItems() {
        let menu = [];

        FoodItems.forEach((item) => {
            if (item.availableOnDay === new Date().getDay()) { menu.push(item); }
        })

        return menu;
    }

    render() {
        return (
            <>
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
                        <Route path="/order">
                            <Order orderItems={this.state.orderItems}></Order>
                        </Route>

                        <Route path="/">
                            <Home foodItems={this.state.foodItems} onClick={(id) => this.addToOrder(id)}></Home>
                        </Route>
                    </Switch>
                </Router>
            </>
        );
    }
}

export default HomeCook;