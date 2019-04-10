/**
 *
 * Header
 *
 */

import React from 'react';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import { Link } from 'react-router-dom';

const Header = props => {
  const { authentication, isMenuOpen, toggleMenu, signOut } = props;

  return (
    <Navbar color='dark' dark expand='md'>
      <NavbarBrand tag={Link} to='/'>
        React Firebase Boilerplate
      </NavbarBrand>
      <NavbarToggler onClick={toggleMenu} />
      <Collapse isOpen={isMenuOpen} navbar>
        <Nav className='ml-auto' navbar>
          <NavItem>
            <NavLink tag={Link} to='/login'>
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink tag={Link} to='/signup'>
              SignUp
            </NavLink>
          </NavItem>
          {authentication.uid && (
            <Nav navbar>
              <NavItem>
                <NavLink tag={Link} to='/dashboard'>
                  Dashboard
                </NavLink>
              </NavItem>
              <NavItem className='log-out'>
                <NavLink onClick={signOut}>Log Out</NavLink>
              </NavItem>
            </Nav>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
