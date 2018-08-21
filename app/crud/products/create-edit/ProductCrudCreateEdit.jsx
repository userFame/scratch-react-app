import React, { Component } from 'react'

class ProductCrudCreateEdit extends Component {

    constructor(props) {
        super(props)
        console.log(props)
        const product = this.props.basket[0]
        if (this.props.basket.length > 0) {
            this.state = {
                productName: product.productName,
                url: product.url,
                ppm: product.ppm,
                type: product.type,
                list: product.list,
                price: product.price
            }
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(this.state)
    }

    render() {
        console.log(this.state)
        // console.log('id from product crud detail', this.props.basket, this.props.productId)
        const product = this.props.basket.find(e => e._id === this.props.productId)
        // console.log(product)
        console.log('look for view', this.props.basket)
        console.log('this is the product', product)

        if (this.props.view === 'edit') {
            return (
                <div>
                    <div>
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
                                <tr key={product._id}>
                                    <td>{product._id}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.price}</td>
                                    <td>{product.ppm}</td>
                                    <td>{product.type}</td>
                                    <td>{product.url}</td>
                                    <td>{product.list}</td>
                                    <td>

                                        <button onClick={this.props.delete.bind(this, product._id, 'list')}>Delete</button>
                                        <button onClick={this.props.changeView.bind(this, null, 'list')}>Home</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <form>
                            Name:<br />
                            <input type="text" name="productName" onChange={this.onChange.bind(this)} defaultValue={product.productName} /><br />
                            URL:<br />
                            <input type='text' name='url' onChange={this.onChange.bind(this)} defaultValue={product.url} /><br />
                            How much a month towards product?:<br />
                            <input type="text" name="ppm" onChange={this.onChange.bind(this)} defaultValue={product.ppm} /><br />
                            {/* Maybe a dropdown menu to choose either
                                from various types of categories or maybe just even accounts
                                */}
                            Type:<br />
                            <input type="text" name="type" onChange={this.onChange.bind(this)} defaultValue={product.type} /><br />
                            Price:<br />
                            <input type="text" name="price" onChange={this.onChange.bind(this)} defaultValue={product.price} /><br />
                            List: <br />
                            <input type="text" name="list" onChange={this.onChange.bind(this)} defaultValue={product.list} /><br />
                            <button onClick={this.props.put.bind(this, product._id, this.state)}>SUBMIT</button>
                        </form>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <form>
                        Name:<br />
                        <input type="text" name="productName" onChange={this.onChange.bind(this)} /><br />
                        URL:<br />
                        <input type='text' name='url' onChange={this.onChange.bind(this)} /><br />
                        How much a month towards product?:<br />
                        <input type="text" name="ppm" onChange={this.onChange.bind(this)} /><br />
                        {/* Maybe a dropdown menu to choose either
                        from various types of categories or maybe just even accounts
                        */}
                        Type:<br />
                        <input type="text" name="type" onChange={this.onChange.bind(this)} /><br />
                        Price:<br />
                        <input type="text" name="price" onChange={this.onChange.bind(this)} /><br />
                        List: <br />
                        <input type="text" name="list" onChange={this.onChange.bind(this)} /><br />
                        <button onClick={this.props.post.bind(this, this.state)}>SUBMIT</button>
                        <button onClick={this.props.changeView.bind(this, 'list')}> Go To List </button><br />
                    </form>
                </div>
            )
        }
    }
}


export default ProductCrudCreateEdit