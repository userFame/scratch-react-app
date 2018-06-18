import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { postBasket, putBasket }from '../../../actions/basketActions'


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

class WishListForm extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         productName: '',
    //         url: '',
    //         ppm: '',
    //         type: '',
    //         price: '',
    //         list: ''
    //     }
    //     this.onChange = this.onChange.bind(this)

    // }

    onChange(e) {
        console.log(e)
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state)
    }

    onSubmit(e) {
        e.preventDefault()
        this.props.postBasket(this.state)
    }

    render() {
        return (
            <DivStyle>
                <CompName>
                    ADD WISH
                </CompName>
                <form>
                    Name:<br />
                    <input type="text" name="productName" onChange={this.onChange.bind(this)}/><br />
                    URL:<br />
                    <input type='text' name='url' onChange={this.onChange.bind(this)} /><br />
                    How much a month towards product?
                    <input type="text" name="ppm" onChange={this.onChange.bind(this)}/><br />
                    {/* Maybe a dropdown menu to choose either
                        from various types of categories or maybe just even accounts
                         */}
                    Type:<br />
                    <input type="text" name="type" onChange={this.onChange.bind(this)}/><br />
                    Price:<br />
                    <input type="text" name="price" onChange={this.onChange.bind(this)}/><br />
                    List: <br />
                    <input type="text" name="list" onChange={this.onChange.bind(this)}/><br />
                    <button onClick={this.onSubmit.bind(this)}>SUBMIT</button>
                </form>
            </DivStyle>
        )
    }
}


export default connect(null, { postBasket })(WishListForm)