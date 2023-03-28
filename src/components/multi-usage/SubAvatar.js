import React, { useState, useEffect } from 'react'
import { HorizontalFlex } from '../../sc-css/atomic'
import { getAvatar } from '../sub/sub-settings.js/avatar-settings/avatarData'

export default function SubAvatar({sub}) {
    const [avatarPath, setAvatarPath] = useState()


    useEffect(() => {
        if (sub.data.avatar) {
            getAvatar(sub)
                .then((data) => setAvatarPath(data))
        }
    })

    return (
        <HorizontalFlex >
            {   
                sub.data.avatar ?
                    <img className='drop-down-menu' src={`${avatarPath}`} style={{ margin:"auto", width: "20px", height: "20px", borderRadius: "50%", border: "1px solid" }} />
                    :
                    <img className='drop-down-menu' src="#" style={{ width: "20px", height: "20px", borderRadius: "50%" }} />
            }
        </HorizontalFlex>
    )
}
