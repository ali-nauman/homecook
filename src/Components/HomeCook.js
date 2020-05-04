import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './Home';
import Order from './Order';

import FoodItems from '../Data/FoodItems';

class HomeCook extends React.Component {
    render() {
        return (
            <>
                <Router>
                    <Navbar bg="light" expand="lg">
                        <Navbar.Brand>HomeCook</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/order">Order</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>

                    <Switch>
                        <Route path="/order">
                            <Order></Order>
                        </Route>

                        <Route path="/">
                            <Home foodItems={FoodItems}></Home>
                        </Route>
                    </Switch>
                </Router>
            </>
        );
    }
}

export default HomeCook;