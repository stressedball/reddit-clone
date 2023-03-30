import React, { useState, useEffect } from 'react'
import { HorizontalFlex } from '../../sc-css/atomic'
import { getAvatar } from '../sub/sub-settings.js/avatar-settings/avatarData'

export default function SubAvatar({ sub }) {
    const [avatarPath, setAvatarPath] = useState()


    useEffect(() => {
        if (sub.data.avatar) {
            getAvatar(sub)
                .then((data) => setAvatarPath(data))
        }
    })

    return (
        <HorizontalFlex style={{ width: 'inherit', height: "inherit" }}>
            {
                sub.data.avatar ?
                    <img className='drop-down-menu' src={`${avatarPath}`} style={{ margin: "auto", maxHeight: "100%", maxWidth: "100%", borderRadius: "50%", border: "1px solid" }} />
                    :
                    <img className='drop-down-menu' src="#" style={{ maxHeight: "100%", maxWidth: "100%", borderRadius: "50%" }} />
            }
        </HorizontalFlex>
    )
}
