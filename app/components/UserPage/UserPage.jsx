import React, { Component } from 'react'
import NavigationBar from '../Widgets/NavigationBar/NavigationBar.jsx'
import ProfilePicture from '../UserPage/ProfilePicture/ProfilePicture.jsx'
import Basket from '../UserPage/Basket/Basket.jsx'
import Wishlist from '../UserPage/Wishlist/Wishlist.jsx'
import WishListForm from '../UserPage/WishListForm/WishListForm.jsx'

import styled from 'styled-components'

import { connect } from 'react-redux'
import { fetchBasket } from '../../actions/basketActions'

const UserPageStyle = styled.div`
    box-sizing: border-box;
`

class UserPage extends Component {
    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         items: []
    //     }
    // }

    componentWillMount() {
        this.props.fetchBasket()
        console.log('currentprops', this.props)
    }

    // componentDidMount() {
    //     const BASE_URL = 'http://localhost:5000/api/wishlist'
    //     fetch(`${BASE_URL}`, {method: 'GET'})
    //         .then(res => res.json())
    //         .then(json =>  {
                
    //             // let { items } = json 

    //             this.setState({ items: json })

    //             console.log(this.state.items)
    //         })
    // }


    render() {
        console.log(this.props)
        return (
            <UserPageStyle>
                <div>
                    {/* <NavigationBar /> */}
                    <ProfilePicture />
                    {/* <Wishlist /> */}
                    <Basket />
                    <WishListForm />
                </div>
            </UserPageStyle>
        )
    }
}

const mapStateToProps = state => ({
    
    basket: state.basket.items
    // return {
    //     piggyBank: state.piggyBank,
    //     accumulatedPrice: state.accumulatedPrice,
    //     accumulatedProducts: state.accumulatedProducts
    // }
})

export default connect(mapStateToProps, { fetchBasket })(UserPage)
