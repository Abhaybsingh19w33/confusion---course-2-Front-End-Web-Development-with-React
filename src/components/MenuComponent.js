import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
// converting the class component to functional component
function RenderMenuItem({ dish, onClick }) {
    return (
        // relacing Media with cards
        // here main component is passing a onclick as a props to this Menu component
        // then dish.id will be passed back to main and stored in selected dish
        <Card>
            {/* `` js code inside this, when it is passed, it is evaluated */}
            {/* so dish.id will be substituted with its id */}
            <Link to={`/menu/${dish.id}`}>
                {/* display the image */}
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                {/* displaying the name of the dishes on the image card itself */}
                <CardImgOverlay>
                    {/* heading for dish */}
                    <CardTitle heading><h4>{dish.name}</h4></CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}

const Menu = (props) => {
    // this will be displayed on UI    
    // map will iterate over items over array
    // map them into list of items here
    // now receiving dishes details from props
    const menu = props.dishes.dishes.map((dish) => {
        return (
            // here we will create the view for each of the item dishes
            // in js every item requires a key attribute to be specified
            // this will help the identify the item uniquely
            <div key={dish.id} className="col-12 col-md-5 mt-1">
                <RenderMenuItem dish={dish} />
            </div>
        );
    });
    if (props.dishes.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.dishes.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {/* js variables */}
                    {menu}
                </div>
            </div>
        );
}
// exporting the component, so that it can be used by other modules
export default Menu;