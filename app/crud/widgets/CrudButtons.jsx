import React, { Component } from 'react'
import { connect } from 'react-redux'

class CrudButtons extends Component {
    render() {
        return (
            <td>
                <button>Details</button>
                <button>Edit</button>
                <button>Delete</button>
            </td>
        )
    }
}

export default CrudButtons