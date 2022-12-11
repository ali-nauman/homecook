import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

import { HomeCookContext } from 'store/home-cook-context';
import { useLocation } from 'react-router-dom';
import { NavItem } from 'react-bootstrap';

export const Header = () => {
  const location = useLocation();
  const { order } = useContext(HomeCookContext);

  const links = [
    { label: 'Home', path: '/' },
    {
      label: 'Order',
      path: '/order',
      content: !!order.length && (
        <span className="badge rounded-pill bg-danger">{order.length}</span>
      ),
    },
  ];

  return (
    <Navbar bg="dark" expand="lg" className="navbar-dark">
      <Navbar.Brand className="text-white">HomeCook</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="d-flex gap-3">
          {links.map((link) => (
            <NavItem key={link.path}>
              <Link
                className="text-decoration-none"
                style={{
                  color:
                    location.pathname === link.path ? 'dodgerblue' : 'white',
                }}
                to={link.path}
              >
                {link.label} {link.content}
              </Link>
            </NavItem>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
