import React, { Component } from 'react'
import axios from 'axios'

class About extends Component {

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
                <p>This is me and this is who I am</p>

            </div>
        )
    }
} 

export default About

// this will eventually be about anonymous page or etc