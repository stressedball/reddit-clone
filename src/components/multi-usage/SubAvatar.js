import React, { useState, useEffect } from 'react'
import { HorizontalFlex } from '../../sc-css/atomic'
import { getAvatar } from '../sub/sub-settings.js/avatar-settings/avatarData'
import { useLocation } from 'react-router-dom'

export default function SubAvatar({ sub }) {

    const [avatarPath, setAvatarPath] = useState()
    const [submit, setSubmit] = useState('')
    const location = useLocation().pathname.split('/')

    useEffect(() => {
        if (sub.data.avatar) {
            getAvatar(sub)
                .then((data) => setAvatarPath(data))
        }
    }, [sub])

    useEffect(() => {
        if (location[3] === 'submit' || location[1] === 'submit') setSubmit('drop-down-create-sub')
    }, [location])

    return (
        <>
            {
                sub.data.avatar ?
                    <img className={`drop-down-menu ${submit}`} src={`${avatarPath}`}
                        style={{ objectFit: "cover", minHeight: "100%", minWidth: "100%", borderRadius: "50%", border: "1px solid inherit" }} />
                    :
                    <img className={`drop-down-menu ${submit}`} src="#"
                        style={{ maxHeight: "100%", maxWidth: "100%", borderRadius: "50%" }} />
            }
        </>
    )
}
