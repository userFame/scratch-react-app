import React, { Component } from 'react'
import About from '../../About/About.jsx'
import NavigationBar from '../../Widgets/NavigationBar/NavigationBar.jsx'
import Login from '../Login/Login.jsx'
import UserPage from '../../UserPage/UserPage.jsx'

import styled from 'styled-components'
import pic from '../../../public/images/share-a-coin.png'



// import Lobster from '../../../public/fonts/Lobster/Lobster-Regular.tff'

// import '../../../public/fonts/Lobster/Lobster-Regular.tff'

// dumb component!!
// const App = (props) => {
//     return (
//         <div>live</div>
//     )
// }

// CREATE ALL COMPONENTS FOR PAGES



const Title = styled.h1`
    font-family: "Lobster";
    font-size: 19em;
    color: palevioletred;
    margin-top: 0px;
    padding-top: .5em;
`;

const Wrapper = styled.section`
    text-align: center;
    font-family: "Lobster Two";
    background-color: papayawhip; 
    box-sizing: border-box;
    height: 110vh;
`;

const Logo = styled.img`
    src: ${props => props.pic};
    text-align: right;
`

class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            app: 'Wish Well',
            loginPopUp: true,
            isToggleOn: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => (
            console.log(prevState),
            {
                isToggleOn: !prevState.isToggleOn
            }))
    }

    homeRender() {
        return (
            <div>
                <NavigationBar />
                <Wrapper>
                    <Title>{this.state.app}</Title>
                    <h2>Wish, Command, Receive</h2>
                    <div>
                        <button onClick={this.handleClick}>Login</button>
                    </div>
                </Wrapper>
                <Logo src={pic}/>
            </div>
        )
    }

    loginRender() {
        return (
            <div>
                <NavigationBar />
                <Wrapper>
                    <Title>{this.state.app}</Title>
                    <h2>Wish, Command, Receive</h2>
                    <div>
                        <Login falseCheck={this.handleClick} />
                    </div>
                </Wrapper>
            </div>
        )
    }

    render() {
        return (
            this.state.isToggleOn ? this.homeRender() : this.loginRender()
        )
    }
}

export default Welcome

// this will eventually be login page