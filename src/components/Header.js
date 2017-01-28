import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {

	render() {
		return(
			<Navbar inverse collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<a href="#">Home</a>
					</Navbar.Brand>
				<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav>
						<NavItem><Link to="/about">About</Link></NavItem>
						<NavItem><Link to="/projects">Projects</Link></NavItem>
						<NavItem><Link to="/contact">Contact</Link></NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		)
	}
}

export default Header;