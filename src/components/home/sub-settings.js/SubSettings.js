import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { GlobalContext } from '../../providers/GlobalProvider'

export default function SubSettings() {

    const { subs } = useContext(GlobalContext)
    const location = useLocation().pathname.split('/')[-1]

    const sub = subs.filter(sub => sub.id === location)

    useEffect(() => {

        console.log(subs)
    }, [subs])

    return (
        <div>
            <p>sub : {sub.data.name}</p>
        </div>
    )
}
