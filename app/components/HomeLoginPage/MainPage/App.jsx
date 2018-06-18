import React, { Component } from 'react'
import About from '../../About/About.jsx'
import axios from 'axios'
import { BrowserRouter } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import UserPage from '../../UserPage/UserPage.jsx'
import Welcome from '../Welcome/Welcome.jsx'


import store from '../../../components/store.jsx'
import { Provider } from 'react-redux'

import styled from 'styled-components'

import Posts from '../../Posts/Posts.jsx'
import PostForm from '../../Posts/PostForm.jsx'
import ProductCrud from '../../../crud/products/ProductCrud.jsx'

// import { createStore, applyMiddleware } from 'redux'

// const store = createStore(() => [], {}, applyMiddleware())

 
// dumb component!!
// const App = (props) => {
//     return (
//         <div>live</div>
//     )
// }

// CREATE ALL COMPONENTS FOR PAGES

class App extends Component {

    constructor(props) {
        super(props)
    }

    // render() {
    //     return (
    //         <Provider store={store}>
    //             <div>
    //                 <Posts />
    //             </div>
    //         </Provider>
    //     )
    // }

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <Route exact path='/' component={Welcome} />
                        <Route exact path='/userPage' component={UserPage} />
                        <Route exact path='/about' component={About} />
                        <Route exact path='/products' component={ProductCrud} />
                    </div>
                </BrowserRouter>
            </Provider>
        )
    }
}

export default App

// this will eventually be login page