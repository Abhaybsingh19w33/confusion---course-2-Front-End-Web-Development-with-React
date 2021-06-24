import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    render() {
        return (
            // this enables us to group together the element and return it
            // also ensures the altenative div is used to add react elements
            // if we use div this will add one more node into our DOM 
            // by react.fragment we don't add one more node to the DOM
            <React.Fragment>
                {/* add navbar */}
                < Navbar dark>
                    <div className="container">
                        {/* Brand name added */}
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
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