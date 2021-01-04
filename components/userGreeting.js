import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
        super(props)

        this.state = {
            isLoggedIn: true
        }
    }

    render() {
        // if (this.state.isLoggedIn) {
        //     return (
        //         <div>
        //             Welcome Vishwas
        //         </div>
        //     )
        // } else {
        //     return (
        //         <div>
        //             Welcome Guest
        //         </div>
        //     )
        // }

        // let message
        // if (this.state.isLoggedIn) {
        //     message = <div>Welcome Lewis Dzacka</div>
        // } else {
        //     message = <div>Welcome Guest</div>
        // }

        // return (
        //     <div>{message}</div>
        // )

        // return (
        //     this.state.isLoggedIn ?
        //         <div>Welcome Lewis Dzacka</div> :
        //         <div>Welcome Guest</div>
        // )

        // this approach will only render if the condition is set to true
        return this.state.isLoggedIn && <div>Welcome Lewis Dzacka</div>
    }
}

export default UserGreeting
