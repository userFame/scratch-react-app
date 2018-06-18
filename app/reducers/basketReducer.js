import { 
    FETCH_BASKET, 
    FETCH_BASKET_BY_ID, 
    POST_BASKET, 
    DELETE_BASKET_ITEM,
    PUT_BASKET
     } from '../actions/types'

const initialState = {
    items:[],
    item: {}
}

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCH_BASKET:
        console.log('fetch basket basketReducer', state)
        return {...state, items: action.payload}
        case FETCH_BASKET_BY_ID: 
        console.log(`fetch baskety by id: ${state}`)
        return {...state, items: action.payload}
        case POST_BASKET: 
        console.log(`post to basket from reducer: ${state}`)
        return {...state, item: action.payload}
        case PUT_BASKET: 
        console.log(`put to basket from reducer: ${state}`)
        return {...state, item: action.payload }
        case DELETE_BASKET_ITEM: 
        console.log('deleting item: ', action.payload, state)
        return {...state, items: state.items.filter(comment => comment._id !== action.payload)}
        default: 
            return state
    }
}

