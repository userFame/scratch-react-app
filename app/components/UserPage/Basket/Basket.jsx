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
        console.log('state from basket', this.state)
        console.log('props from basket', this.props)
        let totalPrice, totalPPM
        const itemsInBucketArray = []
        const pricePerMonthArray = []

        this.props.basket.map((item, index) => {
            itemsInBucketArray.push(item.price)
            pricePerMonthArray.push(item.ppm)
        })

        if (itemsInBucketArray.length > 0) {
            totalPrice = itemsInBucketArray.reduce((a, b) => a + b)
        } 
        // else if (!itemsInBucketArray.length) {
        //     totalPrice = 0
        // }
        if (pricePerMonthArray.length > 0) {
            totalPPM = pricePerMonthArray.reduce((a, b) => a + b)
        } 
        // else if (!pricePerMonthArray.length) {
        //     totalPPM = 0
        // }

        console.log(itemsInBucketArray)

        return (
            <DivStyle>
                <CompName>
                    Basket
                </CompName>
                <div>
                    Piggy Bank (How much you can spend per month?):
                    <br />
                    {/* Total Price of Products in Basket: {`$${Math.max(Math.round(totalPrice * 10)/ 10).toFixed(2)}`} */}
                    Total Price of Products in Basket: {`$${Number.parseFloat(totalPrice).toFixed(2)}`}
                    <br />
                    Total Amount of Products in Basket: {itemsInBucketArray.length}
                    <br />
                    Total Amount Per Month Spending in Basket: {`$${Number.parseFloat(totalPPM).toFixed(2)}`}
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