import React, { Component } from 'React'
import { Button } from 'react-bootstrap'
// import '../../UserPage/ProfilePicture/ProfilePicture.css'
import styled from 'styled-components'
import pic from '../../../public/images/gilfoyles.jpg'


const ProfilePic = styled.img`
    src: ${props => props.src};
    /* background-size: contain; */
    margin: auto;
    max-width: 300px;
    max-height: auto; 
    text-align: center;
`

const DivStyle = styled.div`
    background-color: whitesmoke;
    box-shadow: 0 4px 8px 0 palevioletred;
    border: 2px;
    margin: 1em;
    display: inline-block;
    box-sizing: border-box;
    width: 300px;
    text-align: center;
`

const ProfilePicInfo = styled.div`
    margin: 10px;
`


class ProfilePicture extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Gilfoyle',
            rank: "There's going to be a ranking system?, idea: wishful, wizard harry potter stuff"
        }
    }

    render() {
        return (
            // Make it look like a poloroid pic...make whole thing look like vision board???
            <DivStyle>
                <ProfilePic src={pic} />
                <ProfilePicInfo>
                    <div>
                        <strong>
                            {this.state.name}
                        </strong>
                        <p>{this.state.rank}</p>
                    </div>

                    <div>
                        <button className='changePicture'>
                            Change Picture
                        </button>
                    </div>
                </ProfilePicInfo>
            </DivStyle>
        )
    }
}

export default ProfilePicture


// fix what happens when the name or rank is above the border threshhold and it pushes the border width. CHECK
// Make the border width the main threshhold. CHECK