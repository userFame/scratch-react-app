import {
    FETCH_BASKET,
    FETCH_BASKET_BY_ID,
    POST_BASKET,
    DELETE_BASKET_ITEM,
    PUT_BASKET,
    VIEW
} from '../actions/types'

const initialState = {
    items: [],
    item: {},
    view: ''
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_BASKET:
            // console.log('fetch basket basketReducer', state)
            return { ...state, items: action.payload, item: {oh: 'hi'} }
        // return Object.assign({}, ...state, {
        //     items: action.payload
        // })

        case FETCH_BASKET_BY_ID:
            console.log(`fetch baskety by id: ${state}`)
            return { ...state, items: action.payload }
            break
        // return Object.assign({}, ...state, {
        //     items: action.payload
        // })
        case POST_BASKET:
            console.log(`post to basket from reducer: ${state}, ${view}`)
            return { ...state, item: action.payload }

        // return Object.assign({}, ...state, {
        //     items: action.payload
        // })
        case PUT_BASKET:
            console.log(`put to basket from reducer: ${JSON.stringify(state)}`, action.payload, view)
            return { ...state, item: action.payload, view: 'edit' }

        // return Object.assign({}, ...state, {
        //     items: action.payload,
        //     view: 'edit'
        // })
        case DELETE_BASKET_ITEM:
            console.log('deleting item: ', action.payload, state)
            return { ...state, items: state.items.filter(comment => comment._id !== action.payload[0]), view: action.payload[1] }

        // return Object.assign({}, ...state, {
        //     items: action.payload[0],
        //     view: action.payload[1]
        // })
        case VIEW:
            console.log('from view', action.payload)
            return { ...state, view: action.payload[0], item: action.payload[1] }

        // return Object.assign({}, ...state, {
        //     items: action.payload[0],
        //     item: action.payload[1]
        // })
        default:
            return state
    }
}

