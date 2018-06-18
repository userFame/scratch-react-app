import React, { Component } from 'react'
import About from '../../About/About.jsx'
import NavigationBar from '../../Widgets/NavigationBar/NavigationBar.jsx'
import Login from '../Login/Login.jsx'
import UserPage from '../../UserPage/UserPage.jsx'

import styled from 'styled-components'



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

class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            app: 'Wish Me',
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

    // tries to get rid of form by passing false from Login component
    backButton(e) {
        console.log(e)

        this.setState({
            isToggleOn: false
        })
        // this.forceUpdate()
        console.log(this.state.isToggleOn)
    }

    render() {
        return (
            <div>

                <NavigationBar />
                <Wrapper>
                    <Title>{this.state.app}</Title>
                    <h2>Wish, Command, Receive</h2>
                    <div>
                        {
                            (this.state.isToggleOn === true)
                                ? <button onClick={this.handleClick}>Login</button>
                                : <Login falseCheck={e => { this.backButton(e); this.forceUpdate() }} />
                        }
                    </div>
                </Wrapper>



            </div>

        )
    }
}

export default Welcome

// this will eventually be login page