import React, { Component } from 'react'
import axios from 'axios'

class GetLists extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            error: ''
        }
    }

    componentDidMount() {
        axios.get('http://9c8389b31e84.ngrok.io/blog/article')
            .then(response => {
                console.log(response)
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error)
                this.setState({ errorMsg: 'Error retreiving Data' })
            })
    }

    render() {
        const { posts, errorMsg } = this.state
        return (
            <div>
                Get List
                {
                    posts.length ?
                        posts.map(posts => <div key={posts.id}> {posts.author} created a post
                        <br></br>
                            {posts.title} </div>) :
                        null
                }
                {errorMsg ? <div>{errorMsg}</div> : null}
            </div>
        )
    }
}

export default GetLists
