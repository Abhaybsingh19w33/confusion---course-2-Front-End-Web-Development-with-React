import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class DishDetail extends Component {
    renderCommentTitle(dish) {
        if (dish != null) {
            return <div> <h4>Comments</h4> </div>
        }
    }
    renderComments(dish) {
        if (dish != null) {
            if (dish.comments != null) {
                let options = { year: "numeric", month: "short", day: "numeric" };
                return dish.comments.map((comment) => (
                    <ul key={comment.id} className="list-unstyled">
                        <li className="mb-2">{comment.comment}</li>
                        <li>
                            -- {comment.author}{" "}
                            {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}
                        </li>
                    </ul>
                ));
            } else return <div></div>;
        }

    }

    renderDish(dish) {
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

    render() {
        const { dish } = this.props;

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 mt-1">
                        {this.renderDish(dish)}
                    </div>
                    <div className="col-12 col-md-5 mt-1">
                        {this.renderCommentTitle(dish)}
                        {this.renderComments(dish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default DishDetail;