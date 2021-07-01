import * as ActionTypes from './ActionTypes';
// reducer generate new state from currennt state
// defining the inital state whern the app starts

// state and action as parameter
// it's supposed to do something in response to receiving 
// these three actions. So, it's the responsibility of this 
// dishes reducer to interpret what these actions mean. 
export const Dishes = (state = {
    // Now, how do we interpret this? Initially, the isLoading 
    // property is true because the dishes is empty here.So, that 
    // means that you'll need to load the dishes' information from 
    // somewhere before the details of the dishes become available 
    // within your state.The error message, it will be set to equal 
    // to the error message that will be passed in when you receive 
    // the DISHES_FAILED action here, otherwise, it will be null.So,
    // if you try to fetch the dishes from a server and the server 
    //  fails to deliver the dishes to you, then you will set the error 
    //  message to the corresponding error message that has been 
    //  returned to you from the server.Otherwise, if the dishes are 
    //  obtained correctly, then the dishes will be loaded in with the 
    //  information about the dishes.Now, that will be done when you 
    //  receive the ADD_DISHES action here.So now, you see the three 
    //  kinds of actions that we have seen here.DISHES_LOADING,
    // DISHES_FAILED, and then ADD_DISHES.Now, what do we do in each 
    //  of these three cases? Initially, because we don't have the dishes 
    //  information, I'm going to set the isLoading to true. But then 
    //  the moment you call the ADD_DISHES, then isLoading should be 
    //  set equal to false because the dishes will be loaded in.When 
    //  you call the DISHES_LOADING, if it was originally false set 
    //  to true meaning that you're beginning to fetch new dishes. So, 
    //  this way, whenever you go to the server to fetch the dish 
    //  information from the server, you can set the isLoading to true. 
    //  Once you obtain the dishes information from the server, you set
    //     the isLoading to false and then load in the dishes into the 
    //   dishes property of this part of the state.
    isLoading: true,
    errMess: null,
    dishes: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DISHES:
            // I'm just going to take the same state and then I can add, 
            // and so this is the sprint operator that I'm going to load in 
            // here. So, it will take the current value of the state and 
            // then whatever else that I passing in after this will be 
            // applied as modifications to the state. So again, the state 
            // itself will not be mutated, instead, I take the state, I 
            // create a new object from the original state and then make 
            // some changes to that object and then return that object.
            // the action.payload carries the dishes information. So in 
            // this case, I will set the dishes to action.payload.
            return { ...state, isLoading: false, errMess: null, dishes: action.payload };

        case ActionTypes.DISHES_LOADING:
            return { ...state, isLoading: true, errMess: null, dishes: [] }

        case ActionTypes.DISHES_FAILED:
            // as you realize the dishes failed to load, then the payload in that call, 
            // and the action.payload will contain the error message. So in that case, 
            // I'm going to return the original state, the sprint operator. I will set 
            // the isLoading to false because I have already failed to load the dishes, 
            // so I need to set up the error message. So, the error message will be equal 
            // to action.payload.
            return { ...state, isLoading: false, errMess: action.payload };

        // if not mofified then by default return dishes as it is
        default:
            return state;
    }
}