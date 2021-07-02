import * as ActionTypes from './ActionTypes';
// the action creator to supply that information to my dishes reducer
import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';

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

// nested fucntion 
// this is a thunk 
// the fetchDishes should be used for fetching the dishes
// it is going to return a function
export const fetchDishes = () => (dispatch) => {
    // After a 2000-second delay, I will dispatch a 
    // call to another function called addDishes with the
    //  dishes that I have imported here. So, those dishes 
    //  object will be supplied to the addDishes here. So, 
    //  as you can see, this Thunk is doing two dispatches. 
    //  First, it does the first dispatch. We'll see what 
    //  does dishesLoading is going to do in a short while. 
    //  And then, after two seconds delay, it's going to 
    //  dispatch the addDishes. So, this is going to push 
    // the dishes into the state of our store there
    dispatch(dishesLoading(true));
    // // short delay of 2 sec
    // setTimeout(() => {
    //     dispatch(addDishes(DISHES));
    // }, 2000)

    // fet the dishes 
    // then promise resolves then the data is converted inti json
    // then json passes with addDishes with dispatch method
    return fetch(baseUrl + 'dishes')
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));
}

// It's going to return an action of the type ActionTypes.DISHES_LOADING.
export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});
// this dishesFailed will take an error message as a parameter. So, this is again a function as you expect, which is going to return an action object. So, it'll return an action object of the type, ActionTypes.DISHES_FAILED, and also it will return a payload as error message. 
export const dishesFailed = (errmess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});
//  that the addDishes is taking all the dish information as a parameter here, so it must be creating an action of the type, dishes ADD_DISHES action type, and then it'll pass the dishes as the payload or the second part of my action object here.
export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});

export const fetchComments = () => (dispatch) => {

    return fetch(baseUrl + 'comments')
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)));
}

export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});


export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));
    return fetch(baseUrl + 'promotions')
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});