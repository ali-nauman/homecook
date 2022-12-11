import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import { HomeCookContext } from 'store/home-cook-context';

export const Header = () => {
  const { order } = useContext(HomeCookContext);

  return (
    <Navbar bg="dark" expand="lg" className="navbar-dark">
      <Navbar.Brand className="text-white mt-1">HomeCook</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link className="text-light mt-2 mx-2" to="/">
            Home
          </Link>
          <Link className="text-light mt-2 mx-2" to="/order">
            Order{' '}
            {!!order.length && (
              <span className="badge rounded-pill bg-danger">
                {order.length}
              </span>
            )}
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
