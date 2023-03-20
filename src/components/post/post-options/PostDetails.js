import { GlobalContext } from '../../providers/GlobalProvider'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { HorizontalFlex, Hoverable, LightText, StyledLink } from '../../../sc-css/atomic'
import SubAvatar from '../../multi-usage/SubAvatar'
import { lightBackgroundColor } from '../../../sc-css/COLORS'

export default function PostDetails({ darkMode, sub, post }) {

    const navigate = useNavigate()
    const { users } = useContext(GlobalContext)
    const [poster, setPoster] = useState()

    useEffect(() => {
        if (users) {
            const user = users.filter(user => user.id === post.data.poster)[0]
            setPoster(user)
        }
    }, [users, sub, post])

    if (poster === undefined) return <div>Loading</div>

    return (
        <HorizontalFlex style={{ gap: "3px" }}>

            <SubAvatar sub={sub} />
            <StyledLink onClick={() => navigate(`/r/${sub.id}`)}
                className={`${darkMode}`}
            ><strong>r/{sub.data.name}</strong></StyledLink>

            <LightText style={{ margin: "0" }}>&middot;</LightText>

            <LightText style={{ margin: "0" }}>Posted by <Hoverable
                onClick={() => navigate(`/u/${poster.id}`)}
                className={`${darkMode} mouse-pointer aRef`}
            >{poster.data.userName}</Hoverable></LightText>

            <LightText style={{ margin: "0" }}>{
                post ?
                    post.data.timeStamp ?
                        post.data.timeStamp.toDate().toDateString()
                        : null
                    : null
            }</LightText>

        </HorizontalFlex>

    )
}
