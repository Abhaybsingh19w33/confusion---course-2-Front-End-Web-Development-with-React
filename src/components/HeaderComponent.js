import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false
        }

        this.toggleNav = this.toggleNav.bind(this);
    }

    // in order to use this code in jsx we have to bind this in your code 
    // we can still use this function by arrow function in props
    toggleNav() {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    }

    render() {
        return (
            // this enables us to group together the element and return it
            // also ensures the altenative div is used to add react elements
            // if we use div this will add one more node into our DOM 
            // by react.fragment we don't add one more node to the DOM
            <React.Fragment>
                {/* add navbar */}
                {/* expand for md and lg */}
                < Navbar dark expand="md">
                    <div className="container">
                        {/* button to toppge the navbar on and off */}
                        <NavbarToggler onClick={this.toggleNav} />
                        {/* Brand name added */}
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41" alt="Ristorante Con Fusion"></img>
                        </NavbarBrand>
                        {/* to collapse the navbar for sm screen */}
                        {/* isOpen a boolean value, to know when to show and hide the navbar */}
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    {/* nav-link style the link to fit into the navbar */}
                                    <NavLink className="nav-link" to="/home">
                                        {/* home icon */}
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    {/* nav-link style the link to fit into the navbar */}
                                    <NavLink className="nav-link" to="/aboutus">
                                        {/* home icon */}
                                        <span className="fa fa-info fa-lg"></span> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    {/* nav-link style the link to fit into the navbar */}
                                    <NavLink className="nav-link" to="/menu">
                                        {/* home icon */}
                                        <span className="fa fa-list fa-lg"></span> Menu
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    {/* nav-link style the link to fit into the navbar */}
                                    <NavLink className="nav-link" to="/contactus">
                                        {/* home icon */}
                                        <span className="fa fa-address-card fa-lg"></span> Contact Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar >
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our
                                    lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        )
    };
}

export default Header;