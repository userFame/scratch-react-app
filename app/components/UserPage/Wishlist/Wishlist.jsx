import React, { Component } from 'react'
import axios from 'axios'

class Wishlist extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }



    render() {
        return (
            <div>
                {
                    this.props.wishlist.map((item, index) => {
                        let { name, fromWebsite, perMonth, type, price } = item
                        return (
                            <li key={index}>
                                <ul>
                                    name: {name}
                                </ul>
                                <ul>
                                    fromWebsite: {fromWebsite}
                                </ul>
                                <ul>
                                    perMonth: {perMonth}
                                </ul>
                                <ul>
                                    type: {type}
                                </ul>
                                <ul>
                                    price: {price}
                                </ul>
                            </li>
                        )
                    })
                }
            </div>

        )
    }
}

export default Wishlist