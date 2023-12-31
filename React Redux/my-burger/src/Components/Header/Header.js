import React from 'react';
import { Navbar, NavbarBrand, Nav, NavLink, NavItem } from 'reactstrap';
import './Header.css';
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className='Navigation'>
        <Navbar style={{
            backgroundColor: '#d70f64',
            height: '70px',  
        }}>
            <NavbarBrand href='/' className='mr-auto ml-md-5 Brand'>
                <img src={Logo} alt='Logo' width="80px" />
            </NavbarBrand>
            <Nav className='mr-md-5'>
                <NavItem>
                    <NavLink href='#' className='NavLink'>Home</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    </div>
  )
}

export default Header