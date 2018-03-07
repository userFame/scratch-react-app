import React, { Component } from 'react'
import About from '../About/About.jsx'
import axios from 'axios'

// dumb component!!
// const App = (props) => {
//     return (
//         <div>live</div>
//     )
// }

class App extends Component {



    constructor(props) {
        super(props);
        this.state = {count: '2'}
    }

    componentDidMount() {
        axios.get('http://localhost:5000/api/hello', {
            // SOLVED BY ADDING CORS AND NOT GETTING "ACCESS CONTROL ORIGIN" ERROR IN BROWSER
            // method: 'GET',
            // mode: 'no-cors',
            // headers: {
            //     'Access-Control-Allow-Origin': '*',
            //     'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            //     'Content-Type': 'application/json',
            // },
            // withCredentials: true,
            // credentials: 'same-origin'
        }).then(res => {
            this.setState({data: res.data.express})
            return console.log(res.data.express)}
        )
        .catch(err => console.log(err))
    }

    

    render() {
        return (
            <div>
                <h1>Edward Cadiz</h1>
                <h2>{this.state.data}</h2>
                <h3>{this.state.count}</h3>
                <About />
            </div>
        )
    }
}

export default App

// this will eventually be login page