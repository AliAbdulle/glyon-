import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import data from './data/data.json';

//initial state
const startState = {
    cards: []
}

//Actions
export const initialCards = () => {
    return {
        type: 'INITIALCARDS',
        cards: data
    }
}
//Add Item
export const addItem =(item) => {
    return {
        type: 'ADD',
        item
    }
}
// reducer
export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INITIALCARDS':
            return {
                cards: action.cards,
            }
            case 'ADD':
                return {
                    ...state,
                    cards: [...state.cards, action.item]
                }
                default: return state
    }
}


// create store
export const initStore = (intialState = startState) => {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}