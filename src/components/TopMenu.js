import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/Cart";
export default class TopMenu extends Component {
	render() {
		return (
			<div>
				<Navbar color="light" light expand="md">
					<NavbarBrand href="/">reactstrap</NavbarBrand>

					<Nav className="ml-auto" navbar>
						<NavItem>
							<NavLink>
								<Link to="/">Home</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>
								<Link to="/products">Products</Link>
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink>
								<CartContext.Consumer>
									{({ cartItem }) => (
										<Link to="/products">Cart ({cartItem.length})</Link>
									)}
								</CartContext.Consumer>
							</NavLink>
						</NavItem>
					</Nav>
				</Navbar>
			</div>
		);
	}
}
