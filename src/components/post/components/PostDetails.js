import { GlobalContext } from '../../providers/GlobalProvider'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAvatar } from '../../sub/sub-settings.js/avatar-settings/avatarData'

export default function PostDetails({ darkMode, sub, post }) {

    const navigate = useNavigate()
    const { users } = useContext(GlobalContext)
    const [poster, setPoster] = useState()
    const [avatarPath, setAvatarPath] = useState()

    useEffect(() => {
        if (users) {
            const user = users.filter(user => user.id === post.data.poster)[0]
            setPoster(user)
        }
    }, [users, sub, post])

    useEffect(() => {
        if (sub.data.avatar) {
            getAvatar(sub)
            .then((data) => setAvatarPath(data))
        }
    })

    if (poster === undefined) return <div>Loading</div>

    return (
        <div id='post-header' className='horizontal flex'>

            {
                sub.data.avatar ?
                    <img src={`${avatarPath}`} style={{ width: "20px", height: "20px", borderRadius: "50%" }} />
                    :
                    <img src="#" style={{ width: "20px", height: "20px", borderRadius: "50%" }} />
            }

            <p onClick={() => navigate(`/r/${sub.id}`)}
                className={`${darkMode} mouse-pointer aRef`}
            ><strong>r/{sub.data.name}</strong></p>

            <p style={{ margin: "0" }}>&middot;</p>

            <p style={{ margin: "0" }}>Posted by <span
                onClick={() => navigate(`/u/${poster.id}`)}
                className={`${darkMode} mouse-pointer aRef`}
            >{poster.data.userName}</span></p>

            <p style={{ margin: "0" }}>{
                post ?
                    post.data.timeStamp ?
                        post.data.timeStamp.toDate().toDateString()
                        : null
                    : null
            }</p>

        </div>

    )
}
