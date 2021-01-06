import React, { Component } from 'react'

class LifeCyleB extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'lewis'
        }
        console.log('lifeCyleB constructor')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LifeCycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LifeCycleB componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('LifeCycleB shouldComponetUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('LifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('LifeCycleB componentDidUpdate')
    }

    render() {
        console.log('LifeCycleB render')
        return (
            <div>
                Lifecylce B
            </div>
        )
    }
}

export default LifeCyleB
