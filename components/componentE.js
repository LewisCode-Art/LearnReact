import React, { useContext } from 'react'
import ComponentF from '../components/componentF'
import { UserContext, ChannelContext } from '../pages/index'

function ComponentE() {
    // Render multiple props
    const user = useContext(UserContext)
    const channel = useContext(ChannelContext)

    return (
        <div>
            {user} - {channel}
        </div>
    )
}

export default ComponentE
