import React, { Component } from 'react'
import styled from 'styled-components'

class ProductCrudDetails extends Component {

    render() {
        console.log('id from product crud detail', this.props.basket, this.props.productId)
        const product = this.props.basket.find(e => e._id === this.props.productId)
        console.log(product)



        return (
            <div className='page-header'>
                <div className='btn-toolbar pull-right'>
                    <div className='btn-group'>
                        <button onClick={this.props.changeView.bind(this, 'create')} type='button' className='btn btn-success'>Create</button>
                    </div>

                </div>
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
                        <tr key={product._id}>
                            <td>{product._id}</td>
                            <td>{product.productName}</td>
                            <td>{product.price}</td>
                            <td>{product.ppm}</td>
                            <td>{product.type}</td>
                            <td>{product.url}</td>
                            <td>
                                <button onClick={this.props.changeView.bind(this, 'edit', product._id)}>Edit</button>
                                <button onClick={this.props.delete.bind(this, product._id, 'list')}>Delete</button>
                                <button onClick={this.props.changeView.bind(this, 'list')}>Home</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ProductCrudDetails