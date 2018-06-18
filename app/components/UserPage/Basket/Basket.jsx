import React, { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import fetchBasket from '../../../actions/basketActions'

import { connect } from 'react-redux'

const CompName = styled.h1`
    box-sizing: border-box;
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

class Basket extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         piggyBank: '$200',
    //         accumulatedPrice: '$10.00',
    //         accumulatedProducts: '10'
    //     }
    // }
    
    render() { 
        console.log('state' , this.state)
        console.log('props', this.props)
        return(
            <DivStyle>
                <CompName>
                    Basket
                </CompName>
                <div>
                    Piggy Bank: {this.props.basket.piggyBank}
                    <br />
                    Total Price of Products in Basket: {this.props.basket.accumulatedPrice}
                    <br />
                    Total Amount of Products in Basket: {this.props.basket.accumulatedProducts}
                </div>
            </DivStyle>
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

export default connect(mapStateToProps, { fetchBasket })(Basket)

// in first argument, the second parameter is the function from the action that it gives off