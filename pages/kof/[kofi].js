import React from 'react'
import { useRouter } from 'next/router'

function Kofi() {
    const router = useRouter()
    const { pid } = router.query
    return (
        <div>
            <p>post: {pid}</p>
        </div>
    )
}

export default Kofi
