import React, { Component } from 'react'
import PostForm from './PostForm.jsx'

// connects the comopnents to redux store that was provided from provider component
import { connect } from 'react-redux'

import { fetchPosts } from '../../actions/postActions'

class Posts extends Component {
    // dont need this because it is coming from the store
    // constructor(props) {
    //     super(props)
    //     posts: []

    // }

    // this is coming from actions/types.js && reducers/postReducer.js && postActions
    // componentWillMount() {
    //   fetch('htps://jsonplaceholder.typeiode.com/posts')
    //     .then(res => res.json())
    //     .then(data => this.setState({ posts: data }))
    // }

    componentWillMount() {
        console.log('componentWillMount posts', this.props)
        this.props.fetchPosts()
    }
    
    
    render() {
        console.log('posts', this.props)
        console.log('posts', this.state)
        // changed this.state.posts.map to this.props.posts.map because of mapStateTo Props down below
        const postItems = this.props.posts.map(post => (
            <div key = {post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <div>
                    <PostForm />
                </div>
                From Posts
                {postItems}
            </div>    
        )
    }
}

// posts from root reducer
const mapStateToProps = state => ({
    posts: state.posts.items
})


// connects to redux store
export default connect(mapStateToProps, { fetchPosts })(Posts)
