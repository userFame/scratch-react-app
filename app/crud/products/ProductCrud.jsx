import React, { Component } from 'react'
import ProductCrudList from '../products/list/List.jsx'
import ProductCrudDetail from '../products/detail/Detail.jsx'

import styled from 'styled-components'

import { fetchBasket, deleteBasketItem } from '../../actions/basketActions'

import { connect } from 'react-redux'



class ProductCrud extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         products: []
    //     }
    // }

    componentWillMount() {
        this.props.fetchBasket()
        console.log('store', this.props.store)
        // fetch('http://localhost:5000/products-route')
        // .then(res => res.json())
        // .then(products => {
        //     console.log(products)
        //     this.setState({products: products})
        // })
        // .catch(err => console.log(err))
    }

    // componentWillReceiveProps(newProps) {
    //     if(newProps.newPost) {
    //         this.props.push(nextProps.newPost)
    //     }
    // }

    setComponentState(passInState) {
        this.setState({
            view: passInState
        })
    }

    renderComponent() {
        if (this.state.view === 'Detail') {
            return (
                <div>
                    no no
                </div>
            )
        } else {
            return (
                <div>
                    hi hi
                </div>
            )
        }
    }



    render() {
        console.log(this.props)
        return (
            <div className='page-header'>
                <div className='btn-toolbar pull-right'>
                    <div className='btn-group'>
                        <button type='button' className='btn btn-success' ng-disabled="bLCtrl.disableCreate()" ui-sref=".create">Create</button>
                    </div>

                </div>
                <h3 className="crud-blog-categories_tagline" ui-sref=".list({page: 1})">Products</h3>
                <ProductCrudList />
                from render component
                {this.renderComponent.bind(this)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    basket: state.basket.items
})



export default connect(mapStateToProps, { fetchBasket })(ProductCrud)