import * as ActionTypes from './ActionTypes';
// reducer generate new state from currennt state
// defining the inital state whern the app starts
// state and action as parameter
export const Promotions = (state = {
    isLoading: true,
    errMess: null,
    promotions: []
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_PROMOS:
            return { ...state, isLoading: false, errMess: null, promotions: action.payload };

        case ActionTypes.PROMOS_LOADING:
            return { ...state, isLoading: true, errMess: null, promotions: [] };

        case ActionTypes.PROMOS_FAILED:
            return { ...state, isLoading: false, errMess: action.payload };
        // if not mofified then by default return dishes as it is
        default:
            return state;
    }
};