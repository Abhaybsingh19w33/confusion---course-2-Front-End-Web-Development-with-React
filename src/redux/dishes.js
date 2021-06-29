import { DISHES } from '../shared/dishes';

// reducer generate new state from currennt state
// defining the inital state whern the app starts

// state and action as parameter
export const Dishes = (state = DISHES, action) => {
    switch (action.type) {
        // if not mofified then by default return dishes as it is
        default:
            return state;
    }
}