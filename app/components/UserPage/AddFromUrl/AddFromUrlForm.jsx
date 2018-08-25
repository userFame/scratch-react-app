import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { postBasket } from '../../../actions/basketActions.js'
import { reduxForm, Field } from 'redux-form'


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
// However, as of React v16, there are no performance benefits from using stateless functional components over class components. 
// https://code.tutsplus.com/tutorials/stateful-vs-stateless-functional-components-in-react--cms-29541

class AddFromUrl extends Component {

    // constructor(props) {
    //     super(props)
    //     console.log('from AddFromUrl component: ', props)
    // }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value, cheerio: true })
    }

    sendToCheerio(e) {
        e.preventDefault()
        this.props.postBasket(this.state)
        
        console.log('logs e and state from AddFromurl: ', e , this.state)
    }

    render() {
        // const { handleSubmit } = props
        return (
            <DivStyle>
                <h1>Add From Url</h1>
                {/* Make sure every input must be filled out or else error will pop up, required??? keyword in arrow tags? */}
                <form onSubmit={this.sendToCheerio.bind(this)} className='form'>
                    (ONLY WORKS WITH TARGET FOR NOW) <br />
                    ex: https://www.target.com/p/charmin-ultra-soft-toilet-paper-mega-plus-rolls/-/A-53402330?preselect=49168095#lnk=sametab
                    <br />
                    <div>
                        <label>URL:</label>
                        <div>
                            <Field type='url' component='input' name='url' onChange={this.onChange.bind(this)}  />
                        </div>
                    </div>
                    <br />
                    <div>
                        <label>Price per month: </label>
                        <div>
                            <Field type='text' component='input' name='ppm' onChange={this.onChange.bind(this)}  />
                        </div>
                    </div>
                    <br />
                    <div>
                        <label>Type:</label>
                        <div>
                            <Field type='text' component='input' name='type' onChange={this.onChange.bind(this)}  />
                        </div>
                    </div>
                    <br />
                    <div>
                        <label>List:</label>
                        <div>
                            <Field type='text' component='input' name='list' onChange={this.onChange.bind(this)}  />
                        </div>
                    </div>
                    <br />
                    {/* <button onClick={this.sendToCheerio.bind(this)} required>Submit</button> */}
                    <button>Submit</button>
                    <br />
                </form>
            </DivStyle>
        )
    }
}

const validate = val => {
    const errors = {};
    if (!val.url) {
        console.log('url is required')
        errors.url = 'required'
        
    } else if (!/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(val.url)) {
        // fix this validation so that it doesnt keep alerting you everytime you keypress inside the input box 
        alert('Invalid Url')
        errors.url = 'Invalid Url Input'
    }
    if (!val.ppm) {
        console.log('ppm is required')
        errors.ppm = 'required'
    }
    // } else if (!/^(\d*([.,](?=\d{3}))?\d+)+((?!\2)[.,]\d\d)?$/.test(input).test(val.ppm)) {
    //     alert('Invalid Price Per Month Input')
    //     errors.ppm = 'Invalid Price Per Month Input'
    // }
    if (!val.type) {
        console.log('type is required')
        errors.type = 'required'
    }
    if (!val.list) {
        console.log('list is required')
        errors.list = 'required'
    }
    return errors
}

// const AddFromUrl = props => {
//     return (
//         <DivStyle>
//             <h1>Add From Url</h1>
//             {/* Make sure every input must be filled out or else error will pop up, required??? keyword in arrow tags? */}
//             <form>
//                 (ONLY WORKS WITH TARGET FOR NOW) <br />
//                 ex: https://www.target.com/p/charmin-ultra-soft-toilet-paper-mega-plus-rolls/-/A-53402330?preselect=49168095#lnk=sametab
//                     <br />
//                 <div>
//                     <label>URL:</label>
//                     <div>
//                         <Field type='url' component='input' name='url' onChange={props.onChange()} required />
//                     </div>
//                 </div>
//                 <br />
//                 <div>
//                     <label>Price per month: </label>
//                     <div>
//                         <Field type='text' component='input' name='ppm' onChange={props.onChange()} required />
//                     </div>
//                 </div>
//                 <br />
//                 <div>
//                     <label>Type:</label>
//                     <div>
//                         <Field type='text' component='input' name='type' onChange={props.onChange()} required />
//                     </div>
//                 </div>
//                 <br />
//                 <div>
//                     <label>List:</label>
//                     <div>
//                         <Field type='text' component='input' name='list' onChange={props.onChange()} required />
//                     </div>
//                 </div>
//                 <br />
//                 <button onClick={props.sendToCheerio()} required>Submit</button>
//                 <br />
//             </form>
//         </DivStyle>
//     )
// }

// export default connect(null, { postBasket })(AddFromUrl)

AddFromUrl = connect(null, { postBasket })(AddFromUrl)

export default reduxForm({ 
    form: 'addFromUrl',
    validate
 })(AddFromUrl)

