import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

export const ConfigureStore = () => {
    // creating store with Reducer and initialState
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
}