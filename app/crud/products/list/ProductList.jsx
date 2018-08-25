import React, { Component } from 'react'
// import { connect } from 'react-redux'
import styled from 'styled-components'

const Margin = styled.div`
    box-sizing: border-box;
    margin: 1em;
`
class ProductList extends Component {

    render() {

        console.log('from Product List', this.props)
        const productsInBasket = this.props.products.map((product, index) => (
            // console.log('single product', product),
            <tr id={index} key={product._id}>
                <td>{product._id}</td>
                <td>{product.productName}</td>
                <td>{product.price}</td>
                <td>{product.ppm}</td>
                <td>{product.type}</td>
                <td>{product.url}</td>
                <td>{product.list}</td>
                <td>
                    <button onClick={this.props.changeView.bind(this, 'details', product._id)}>Details</button>
                    <button onClick={this.props.changeView.bind(this, 'edit', product._id)}>Edit</button>
                    <button onClick={this.props.delete.bind(this, product._id)}>Delete</button>
                </td>
            </tr>
        ))
        return (
            // console.log('productList', props),
            <Margin className='page-header'>
                <div className='btn-toolbar pull-right'>
                    <div className='btn-group'>
                        <button onClick={this.props.changeView.bind(this, 'create')} type='button' className='btn btn-success'>Create</button>
                    </div>

                </div>
                <h3>Products</h3>

                <table>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>PPM</th>
                            <th>type</th>
                            <th>url</th>
                            <th>list</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsInBasket}
                    </tbody>
                </table>
            </Margin>
        )
    }
}
// )

// const mapStateToProps = state => ({
//     basket: state.basket.items
// })

// export default connect(mapStateToProps, { fetchBasket })(ProductList)

export default ProductList