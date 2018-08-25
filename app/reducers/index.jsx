import { combineReducers } from 'redux'
import postReducer from './postReducer'
import basketReducer from './basketReducer'
import { reducer as formReducer } from 'redux-form'

export default combineReducers({
    posts: postReducer,
    basket: basketReducer,
    form: formReducer
})

