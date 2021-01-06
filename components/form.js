import React, { Component } from 'react'

class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comments: '',
            topic: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentChange = event => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChnage = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
        event.preventDefault()
    }

    render() {
        const { username, comments, topic } = this.state
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Username</label>
                    <input type="text" value={username} onChange={this.handleUsernameChange} />

                    <div>
                        <label>Comments</label>
                        <textarea value={comments} onChange={this.handleCommentChange}></textarea>
                    </div>

                    <div>
                        <label>Topics</label>
                        <select value={topic} onChange={this.handleTopicChnage}>
                            <option value="react">React</option>
                            <option value="angular">Angular</option>
                            <option value="vue">Vue</option>
                        </select>
                    </div>

                    <button type="submit">Submit</button>
                </form>
            </div>


        )
    }
}

export default Form
