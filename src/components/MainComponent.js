import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './/MenuComponent';
import { DISHES } from '../shared/dishes';
import React, { Component } from 'react';
import DishDetail from "./DishdetailComponent";

// changing from function to class component
// function App() {
// main component will be the responsible for the state of application
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div>
                {/* add navbar */}
                < Navbar dark color="primary" >
                    <div className="container">
                        {/* Brand name added */}
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar >
                {/* using menu component from MenuComponent */}
                {/* passing the dishes details as props */}
                < Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                {/* filter will compare from each dish and get the maching dish with dishId */}
                {/* filter will pass the result in array format */}
                {/* so just to be safe we are selecting the first dish */}
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </div >
        );
    }
}

export default Main;
