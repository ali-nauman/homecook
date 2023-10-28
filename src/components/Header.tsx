import { useContext } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import { HomeCookContext } from 'src/store/home-cook-context';

export const Header = () => {
  const { order } = useContext(HomeCookContext);

  const links = [
    { label: 'Menu', path: '/' },
    {
      label: 'Order',
      path: '/order',
      content: !!order.length && (
        <span className="badge rounded-pill bg-danger">{order.length}</span>
      ),
    },
  ];

  return (
    <Navbar
      style={{ backgroundColor: '#333' }}
      expand="lg"
      className="navbar-dark px-4"
    >
      <Navbar.Brand>HomeCook</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="d-flex gap-3">
          {links.map(link => (
            <NavItem key={link.path}>
              <NavLink
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
                to={link.path}
              >
                {link.label} {link.content}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
