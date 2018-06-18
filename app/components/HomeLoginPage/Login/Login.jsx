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
        this.backButton = this.backButton.bind(this)
    }




    backButton(e) {  
        this.props.falseCheck(e.target.value)
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
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </FormGroup>
                        <FormGroup controlId="password" bsSize="large">
                            <ControlLabel>Password</ControlLabel>
                            <FormControl
                                value={this.state.password}
                                onChange={this.handleChange}
                                type="password"
                            />
                        </FormGroup>
                        <Button
                            block
                            bsSize="large"
                        // disabled={!this.validateForm()}
                        // type="submit"
                        >
                            Login
                        </Button>
                        <Button
                            block
                            bsSize="large"
                            onClick={e => this.backButton(e)}
                            value='false'
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
