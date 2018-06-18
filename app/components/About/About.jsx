import React, { Component } from 'react'
import NavigationBar from '../Widgets/NavigationBar/NavigationBar.jsx'
import axios from 'axios'
import Posts from '../Posts/Posts.jsx'

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {count: '2'}
    }

    // componentDidMount() {
    //     axios.get('http://localhost:5000/api/hello', {
    //         SOLVED BY ADDING CORS AND NOT GETTING "ACCESS CONTROL ORIGIN" ERROR IN BROWSER
    //         method: 'GET',
    //         mode: 'no-cors',
    //         headers: {
    //             'Access-Control-Allow-Origin': '*',
    //             'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //             'Content-Type': 'application/json',
    //         },
    //         withCredentials: true,
    //         credentials: 'same-origin'
    //     }).then(res => {
    //         this.setState({data: res.data.express})
    //         return console.log(res.data.express)}
    //     )
    //     .catch(err => console.log(err))
    // }

    render() {
        return (
            <div>
                <NavigationBar />
                <p> {`Keeping track of of what you need. Keeping track of what you want. Keeping track of what you want to get for the people you love most.
                    How can you keep track with all of the busyness in your life? Welcome to Wish Me! an app that redefines how you save for what you want.`}
                </p>
                <Posts />
            </div>
        )
    }
} 

export default About

// this will eventually be about anonymous page or etc