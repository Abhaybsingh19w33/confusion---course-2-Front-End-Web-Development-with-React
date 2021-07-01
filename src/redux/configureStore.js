import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    // creating store with Reducer and initialState like dishes etc
    const store = createStore(
        // mapping the reducer objects
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        // both of these are being supplied into our 
        // store as enhancers for our store. And once 
        // we do that, then both the Thunk and the 
        // Logger become available within our application
        applyMiddleware(thunk, logger)
    );

    return store;
}