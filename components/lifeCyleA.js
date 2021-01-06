import React, { Component } from 'react'
import LifeCyleB from './lifeCycleB'

class LifeCyleA extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'lewis'
        }
        console.log('lifeCyleA constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleA componentDidMount')
        return true
    }

    shouldComponentUpdate() {
        console.log('LifeCycleA shouldComponetUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleA componentDidUpdate')
    }

    changeState = () => {
        this.setState({
            name: 'koby'
        })
    }

    render() {
        console.log('LifeCycleA render')
        return (
            <>
                <div>
                    Lifecylce A
                </div>
                <button onClick={this.changeState}> changeState</button>
                <LifeCyleB />
            </>
        )
    }
}

export default LifeCyleA
