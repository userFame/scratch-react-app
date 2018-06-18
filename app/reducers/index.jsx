import { combineReducers } from 'redux'
import postReducer from './postReducer'
import basketReducer from './basketReducer'

export default combineReducers({
    posts: postReducer,
    basket: basketReducer
})

