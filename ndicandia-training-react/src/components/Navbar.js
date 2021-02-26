import React from 'react';

import './styles/Navbar.css';
import Navbar from 'emerald-ui/lib/Navbar';
import Nav from 'emerald-ui/lib/Nav';
import DropdownButton from 'emerald-ui/lib/DropdownButton';
import DropdownItem from 'emerald-ui/lib/DropdownItem';
import Avatar from 'emerald-ui/lib/Avatar';

import newsLogo from '../images/logo-1.svg';

class OwnNavbar extends React.Component {
	render() {
		return (
			<Navbar breakAt="lg">
				<Navbar.Brand>
					<a href="#foo">
						<img src={newsLogo} alt="" />
					</a>
				</Navbar.Brand>
				<Nav grow collapsible>
					<DropdownButton title="Dropdown" id="dd1">
						<DropdownItem eventKey="1">Action</DropdownItem>
						<DropdownItem eventKey="2">Another action</DropdownItem>
						<DropdownItem eventKey="3" active>
							Active Item
						</DropdownItem>
					</DropdownButton>
					<a href="#foo">Editorial</a>
					<a href="#foo">Contact Us</a>
				</Nav>
				<Nav collapsible>
					<DropdownButton
						noCaret
						fromRight
						id="dd2"
						title={<Avatar title="JS" />}
					>
						<DropdownItem eventKey="1">Action</DropdownItem>
						<DropdownItem eventKey="2">Another action</DropdownItem>
						<DropdownItem eventKey="3" active>
							Active Item
						</DropdownItem>
						<DropdownItem separator />
						<DropdownItem eventKey="4">Separated link</DropdownItem>
					</DropdownButton>
				</Nav>
			</Navbar>
		);
	}
}

export default OwnNavbar;
