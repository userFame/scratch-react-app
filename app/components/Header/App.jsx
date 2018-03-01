import React, { Component } from 'react'
import About from '../About/About.jsx'

// dumb component!!
// const App = (props) => {
//     return (
//         <div>live</div>
//     )
// }

class App extends Component {
    render() {
        return (
            <div>
                <h1>Edward Cadiz</h1>
                <About />
            </div>
        )
    }
}

export default App  

// this will eventually be login page