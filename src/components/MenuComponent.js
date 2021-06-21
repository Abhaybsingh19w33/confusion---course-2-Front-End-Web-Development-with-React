import React, { Component } from 'react';
import { Media } from 'reactstrap';

class Menu extends Component {
    // defining constructor
    constructor(props) {
        // supplying this props to the super class
        super(props);

        // state stores the properties of the component, so we can make us of
        this.state = {
            // js object to save the list of dishes(objects)
            dishes: [
                {
                    id: 0,
                    name: 'Uthappizza',
                    image: 'assets/images/uthappizza.png',
                    category: 'mains',
                    label: 'Hot',
                    price: '4.99',
                    description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
                },
                {
                    id: 1,
                    name: 'Zucchipakoda',
                    image: 'assets/images/zucchipakoda.png',
                    category: 'appetizer',
                    label: '',
                    price: '1.99',
                    description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
                },
                {
                    id: 2,
                    name: 'Vadonut',
                    image: 'assets/images/vadonut.png',
                    category: 'appetizer',
                    label: 'New',
                    price: '1.99',
                    description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
                },
                {
                    id: 3,
                    name: 'ElaiCheese Cake',
                    image: 'assets/images/elaicheesecake.png',
                    category: 'dessert',
                    label: '',
                    price: '2.99',
                    description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
                }
            ]
        }
    }

    // this will be displayed on UI
    render() {
        // map will iterate over items over array
        // map them into list of items here
        const menu = this.state.dishes.map((dish) => {
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