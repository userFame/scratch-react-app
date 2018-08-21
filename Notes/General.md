# React/Redux

- for inputs to take in user input, an onChange attr must be in the jsx element

```jsx
    // in constructor function
    this.onChange = this.onChange.bind(this)

    // onChange function 
    onChange(e) {
         this.setState({ [e.target.name]: e.target.value })
    }

    onChange={this.onChange}

```


on form tabs, you must put an onSubmit attr or function 

```jsx
    this.onSubmit = this.onSubmit.bind(this)

    onSubmit(e) {
        e.preventDefault() 

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        fetch('url', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(post)
        })
        .then(res => res.json())
        .then(data = console.log(data))
    }
```

## Implementing Redux on React

yarn add
- redux
- react-redux
- redux-thunk
    - middleware for redux that accesses dispatch method for redux so we can make async calls from actions

```jsx
import React, { Component } from 'react'
// import { Provider } from 'react-redux
// import { createStore, applyMiddleware } from 'redux'
import { connect } from 'react-redux'  

// dont need as it is coming from store.js
// const store = createStore(() => [], {}, applyMiddleware()) 

class Posts extends Component {
    render() {
        const postItems = this.state.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>        
        )
    }
}

``` 

- create a store.js in main components folder and you can put the store declaration from the above code into it.

```jsx
// store.js
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const initialState= {}

const middleware = [thunk]

store = createStore(rootReducer, initialState, applyMiddleware(...middleware)) 

export default store
```
- create a reducers folder in components folder with an index.js (the root folder) and a postReducer.js file 

```jsx
// reducers/index.js

import { combineReducers } from 'redux'
import postReducer from './postReducer'

export default combineReducers({
    posts: postReducer
})

// postReducer.js
import { FETCH_POSTS, NEW_POSTS } from '../types' 

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case FETCH_POSTS: 
            return {
                ...state, 
                items: action.payload
            }
        default: 
            return state; 
    }
}


```

in main src folder, create an actions folder with types.js and postActions.js files

```jsx
// types.js
export const FETCH_POSTS = 'FETCH_POSTS'
export const NEW_POSTS = 'NEW_POSTS'

// postActions.js does the fetch so you dont need it in your component will mount function in your component 

// no longer => .then(data => this.setState({ posts: data })) because this sends it to the component
export function(dispatch) {
    return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
    }
}

// OR CAN BE WRITTEN LIKE

export const fetchPosts = () => dispatch => {
        return function (dispatch) {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type: FETCH_POSTS,
            payload: posts
        }))
    }
}


```

```json
{_id: "5b493b88c10ff91bffd46abc", productName: "VIZIO E-Series 65" Class (64.5" Diag.) 4K HDR Smart TV - Black (E65-F0)", price: 749.99, url: "https://www.target.com/p/vizio-e-series-65-class-64-5-diag-4k-hdr-smart-tv-black-e65-f0/-/A-50651388", ppm: 35, …}
cheerio
:
true
list
:
"animal"
ppm
:
35
price
:
749.99
productName
:
"VIZIO E-Series 65" Class (64.5" Diag.) 4K HDR Smart TV - Black (E65-F0)"
type
:
"asdf"
url
:
"https://www.target.com/p/vizio-e-series-65-class-64-5-diag-4k-hdr-smart-tv-black-e65-f0/-/A-50651388"
_id
:
"5b493b88c10ff91bffd46abc"
```

