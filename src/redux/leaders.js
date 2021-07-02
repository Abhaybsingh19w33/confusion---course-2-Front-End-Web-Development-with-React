import * as ActionTypes from './ActionTypes';
// reducer generate new state from currennt state
// defining the inital state whern the app starts

// state and action as parameter
export const Leaders = (state = {
    isLoading: true,
    errMess: null,
    leaders: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_LEADERS:
            return { ...state, isLoading: false, errMess: null, leaders: action.payload };

        case ActionTypes.LEADERS_LOADING:
            return { ...state, isLoading: true, errMess: null, leaders: [] };

        case ActionTypes.LEADERS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload, leaders: [] };
        // if not mofified then by default return dishes as it is
        // if not mofified then by default return dishes as it is
        default:
            return state;
    }
}