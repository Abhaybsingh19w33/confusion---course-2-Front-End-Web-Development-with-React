import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
    // defining constructor
    constructor(props) {
        // supplying this props to the super class
        super(props);
        // state stores the properties of the component, so we can make us of
        this.state = {
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
                <div key={dish.id} className="col-12 mt-5">
                    {/* list tag item */}
                    <Media tag="li">
                        {/* alignment */}
                        <Media left middle>
                            {/* display the image */}
                            <Media object src={dish.image} alt={dish.name} />
                        </Media>
                        {/* body of the image */}
                        <Media body className="ml-5">
                            {/* heading for dish */}
                            <Media heading>{dish.name}</Media>
                            {/* dish description */}
                            <p>{dish.description}</p>
                        </Media>
                    </Media>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {/* list of items */}
                    <Media list>
                        {/* js variables */}
                        {menu}
                    </Media>
                </div>
            </div>
        );
    }
}

// exporting the component, so that it can be used by other modules
export default Menu;