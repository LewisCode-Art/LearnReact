import React, { Component } from 'react'
import MemoComp from './memoComp'
import PureComp from './pureComp'
import RegComp from './regComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: 'Lewis'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Lewis'
            })
        }, 2000)
    }

    render() {
        console.log('******************Parent Comp Render********************')
        return (
            <div>
                Parent Componenet
                {/* <RegComp name={this.state.name} />
                <PureComp name={this.state.name} /> */}

                <MemoComp name={this.state.name}/>

            </div>
        )
    }
}

export default ParentComp
