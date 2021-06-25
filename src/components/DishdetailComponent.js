import React from "react";
import { Breadcrumb,BreadcrumbItem, Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { Link } from 'react-router-dom';

function RenderDish({ dish }) {
    if (dish != null) {
        return < Card >
            {/* this will add one more card that will have the selected image and title */}
            <CardImg top src={dish.image} alt={dish.name} />
            < CardBody >
                <CardTitle><h4>{dish.name}</h4></CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody >
        </Card >
    }
    else {
        return <div></div>;
    }
}

function RenderComments({ comments }) {
    // if (dish != null) {
        if (comments != null) {
            // let options = { year: "numeric", month: "short", day: "numeric" };
            return comments.map((comment) => (
                <ul key={comment.id} className="list-unstyled">
                    <li className="mb-2">{comment.comment}</li>
                    <li>
                        -- {comment.author}{" "}
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                    </li>
                </ul>
            ));
        } else return <div></div>;
    // } else return <div></div>;

}

const DishDetail = (props) => {
    // const { dish } = this.props;
    // console.log(props);
    // console.log("props.dish ");
    // console.log(props.dish);
    // console.log("props.comment ");
    // console.log(props.comments);
    if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/menu'>Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>
                            {props.dish.name}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 mt-1">
                        <RenderDish dish={props.dish} />
                        {/* {this.renderDish(dish)} */}
                    </div>
                    <div className="col-12 col-md-5 mt-1">
                        <h4>Comments</h4>
                        <RenderComments comments={props.comments} />
                        {/* {this.renderComments(dish)} */}
                    </div>
                </div>
            </div>
        );
    }
    else return <div></div>;
}

export default DishDetail;