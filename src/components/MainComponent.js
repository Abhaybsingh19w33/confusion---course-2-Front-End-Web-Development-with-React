import Menu from './/MenuComponent';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes';
import React, { Component } from 'react';
import DishDetail from "./DishdetailComponent";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
// changing from function to class component
// function App() {
// main component will be the responsible for the state of application
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            // selectedDish: null
        };
    }

    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId });
    // }

    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }
        return (
            <div>
                <Header />
                <Switch>
                    {/* here we are giving pathname and Homepage Component */}
                    <Route path="/home" component={HomePage} />
                    {/* this Route will not allow us to pasa ny props into menu component */}
                    {/* so we have to pass the props as an function component */}
                    <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
                    {/* if no path matches then redirect to home page */}
                    <Redirect to="/home" />
                </Switch>
                {/* using menu component from MenuComponent */}
                {/* passing the dishes details as props */}
                {/* < Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} /> */}
                {/* filter will compare from each dish and get the maching dish with dishId */}
                {/* filter will pass the result in array format */}
                {/* so just to be safe we are selecting the first dish */}
                {/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
                <Footer />
            </div >
        );
    }
}

export default Main;
