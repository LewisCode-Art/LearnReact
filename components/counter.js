import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increaseCount() {
        // when ever you have to update the prev state best practice is to use a function instead of updating thr object as implemented below
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        // use this function to execucte an action after setState has been executed (comments)
        //     console.log('Callback value', this.state.count)
        // })
        // this will be executed before setState runs (comments)
        // console.log(this.state.count)

        this.setState(prevState => ({
            count: prevState.count + 5
        })), () => {
            console.log('Callback value', this.state.count)
        }
    }

    render() {
        return (
            <div>
                {this.state.count}
                <button onClick={() => this.increaseCount()}>Count</button>
            </div>
        )
    }
}

export default Counter