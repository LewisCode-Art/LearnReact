import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
        super(props)

        this.state = {
            message: "Hello"
        }

        // this.clickHandler = this.clickHandler.bind(this)
    }

    // clickHandler() {
    //     this.setState({
    //         message: "Goodbye"
    //     })
    //     console.log(this)
    // }

    clickHandler = () => {
        this.setState({
            message: "Goodbye"
        })
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* 1st apprch, with normal functions the function name is declared, use bind keyword to connect event handler to setState */}
                {/* <button onClick={this.clickHandler.bind(this)}>Click Binder</button> */}

                {/* 2nd apprch, With fat arrow the function is called */}
                {/* <button onClick={() => this.clickHandler()}>Click Binder</button> */}

                {/* Third approach binding in the constructor */}
                {/* <button onClick={this.clickHandler}>Click Binder</button> */}

                {/* 4th apprch, using declaring function using fat arrow in the class component */}
                <button onClick={this.clickHandler}>Click Binder</button>
            </div>
        )
    }
}

export default EventBind
