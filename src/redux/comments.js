import { COMMENTS } from '../shared/comments';
import * as ActionTypes from './ActionTypes';

// reducer generate new state from currennt state
// defining the inital state whern the app starts
// state and action as parameter
export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            // pushes in new array and a new object is created
            return state.concat(comment);
        // if not mofified then by default return dishes as it is
        default:
            return state;
    }
}