import * as ActionTypes from './ActionTypes';

// this function will create an action objects
export const addComment = (dishID, rating, author, comment) => ({
    // defining action type
    // then send it to store
    type: ActionTypes.ADD_COMMENT,
    payload: {
        dishId: dishID,
        rating: rating,
        author: author,
        comment: comment
    }
});