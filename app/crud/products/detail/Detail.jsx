import React, { Component } from 'react'
import { connect } from 'react-redux'

import styled from 'styled-components'

import { fetchBasketById, putBasket, deleteBasketItem } from '../../../actions/basketActions'



class ProductCrudDetail extends Component {

    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    
}


export default connect(mapStateToProps, { fetchBasketById, putBasket, deleteBasketItem })(ProductCrudDetail)