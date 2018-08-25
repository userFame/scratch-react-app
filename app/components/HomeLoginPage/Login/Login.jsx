import React, { Component } from 'react'
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap'
import styled from 'styled-components'




class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
        // this.backButton = this.backButton.bind(this)
        console.log('props in login', props)
        this.handleChange = this.handleChange.bind(this)

    }

    userPageLocate() {
        window.location.href='/userPage'
    }
    
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }


    render() {
        return (
            <div>
                <div className="Login">
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup controlId="email" bsSize="large">
                            <ControlLabel>Email</ControlLabel>
                            <FormControl
                                autoFocus
                                type="email"
                                name='email'
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                onChange={this.handleChange}
                                name='password'
                                type="password"
                            />
                        </FormGroup>
                        <Button
                            block
                            bsSize="large"
                            onClick={this.userPageLocate.bind(this)}
                        // disabled={!this.validateForm()}
                        // type="submit"
                        >
                            Login
                        </Button>
                        <Button
                            block
                            bsSize="large"
                            onClick={(e) => this.props.falseCheck()}
                        >
                            Back
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login
