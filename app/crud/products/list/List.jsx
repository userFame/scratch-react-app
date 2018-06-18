import React, { Component } from 'react'
// import CrudButtons from '../widgets/CrudButtons.jsx'
import ProductCrudDetail from '../detail/Detail.jsx'

import { connect } from 'react-redux'

import { fetchBasket, fetchBasketById, putBasket, postBasket, deleteBasketItem } from '../../../actions/basketActions'


class ProductCrudList extends Component {

    delete(item) {
        this.props.deleteBasketItem(item)
        // done
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

    renderDetail() {
        if (this.state.view === 'Detail') {
            return (
                <div></div>
            )
        }
    }

    render() {
        console.log(this.props)
        const productsInBasket = this.props.basket.map((product, index) => (
            // console.log('single product', product),
            <tr id={index} key={product._id}>
                <td>{product._id}</td>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>{product.ppm}</td>
                <td>{product.type}</td>
                <td>{product.url}</td>
                <td>
                    <button>Details</button>
                    <button>Edit</button>
                    <button onClick={this.delete.bind(this, product._id)}>Delete</button>
                </td>
            </tr>
        ))
        return (
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>PPM</th>
                        <th>type</th>
                        <th>url</th>
                    </tr>
                </thead>
                <tbody>
                    {productsInBasket}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = state => ({
    basket: state.basket.items,
    newPost: state.basket.item
})


export default connect(mapStateToProps, { fetchBasket, fetchBasketById, putBasket, postBasket, deleteBasketItem })(ProductCrudList)