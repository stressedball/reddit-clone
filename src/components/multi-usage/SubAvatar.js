import React, { useState, useEffect } from 'react'
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
        <div style={{display:"flex"}} >
            {   
                sub.data.avatar ?
                    <img src={`${avatarPath}`} style={{ margin:"auto", width: "20px", height: "20px", borderRadius: "50%", border: "1px solid" }} />
                    :
                    <img src="#" style={{ width: "20px", height: "20px", borderRadius: "50%" }} />
            }

        </div>
    )
}
