import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import DishDetail from "../components/DishdetailComponent";

class Menu extends Component {
    // defining constructor
    constructor(props) {
        // supplying this props to the super class
        super(props);
        // state stores the properties of the component, so we can make us of
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    renderDish(dish) {
        if (dish != null) {
            return (
                <DishDetail dish={dish} />
            );
        }
        else {
            // if nothing is selected then just pass div
            return (
                <div></div>
            );
        }
    }

    // this will be displayed on UI
    render() {
        // map will iterate over items over array
        // map them into list of items here
        // now receiving dishes details from props
        const menu = this.props.dishes.map((dish) => {
            return (
                // here we will create the view for each of the item dishes
                // in js every item requires a key attribute to be specified
                // this will help the identify the item uniquely
                <div key={dish.id} className="col-12 col-md-5 mt-1">
                    {/* relacing Media with cards */}
                    <Card onClick={() => this.onDishSelect(dish)}>
                        {/* display the image */}
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        {/* displaying the name of the dishes on the image card itself */}
                        <CardImgOverlay>
                            {/* heading for dish */}
                            <CardTitle heading>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {/* js variables */}
                    {menu}
                </div>
                <div className="row">
                    {/* rendering the dish and shioeing the card details */}
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

// exporting the component, so that it can be used by other modules
export default Menu;