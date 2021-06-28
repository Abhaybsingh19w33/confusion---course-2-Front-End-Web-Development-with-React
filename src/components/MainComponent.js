import Menu from './/MenuComponent';
import Home from './HomeComponent';
import React, { Component } from 'react';
import DishDetail from "./DishdetailComponent";
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// changing from function to class component
// function App() {
// main component will be the responsible for the state of application
// this function will allow these compoent to main as props
const mapStateToProps = (state) => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    };
}

class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const HomePage = () => {
            return (
                // displaying only dish which are featured
                <Home
                    dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props.leaders.filter((leader) => leader.featured)[0]}
                />
            );
        }

        // method a params from route
        // it consist of parameter as dishId
        const DishWithId = ({ match }) => {
            return (
                // match.params.dishId - accessing the dishId from params
                // 10 is the redix od decimal number
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
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
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                    {/* here Route returns 3 prams that we use in DishWithId */}
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
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

// connecting to redux
// to make use of react router 
// connect should be sround by withRouter
export default withRouter(connect(mapStateToProps)(Main));
