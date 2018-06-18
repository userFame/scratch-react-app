import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap'

import styled from 'styled-components'




class NavigationBar extends Component {
    render() {
        return (
            // <Navbar fixedTop>
            <Navbar style={{marginBottom: '0'}}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#"> WB </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <MenuItem eventKey={1} href='/'>Home</MenuItem>
                        <MenuItem eventKey={2} href="/about">About</MenuItem>
                        <MenuItem eventKey={3} href="localHost:8080/login">Login</MenuItem>
                        <NavDropdown eventKey={4} title="Services" id="basic-nav-dropdown">
                            <MenuItem eventKey={4.1}> Services 1 </MenuItem>
                            <MenuItem eventKey={4.2}> Services 2 </MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default NavigationBar