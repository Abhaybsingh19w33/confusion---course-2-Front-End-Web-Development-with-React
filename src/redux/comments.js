import * as ActionTypes from './ActionTypes';

// reducer generate new state from currennt state
// defining the inital state whern the app starts
// state and action as parameter
export const Comments = (state = { errMess: null, comments: [] }, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return { ...state, errMess: null, comments: action.payload };

        case ActionTypes.COMMENTS_FAILED:
            return { ...state, errMess: action.payload };

        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            // pushes in new array and a new object is created
            return { ...state, comments: state.comments.concat(comment) };
        // if not mofified then by default return dishes as it is
        default:
            return state;
    }
};