import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Menu extends Component {
    // defining constructor
    constructor(props) {
        // supplying this props to the super class
        super(props);
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
                    {/* here main component is passing a onclick as a props to this Menu component */}
                    {/* then dish.id will be passed back to main and stored in selected dish */}
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        {/* display the image */}
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        {/* displaying the name of the dishes on the image card itself */}
                        <CardImgOverlay>
                            {/* heading for dish */}
                            <CardTitle heading><h4>{dish.name}</h4></CardTitle>
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
            </div>
        );
    }
}

// exporting the component, so that it can be used by other modules
export default Menu;