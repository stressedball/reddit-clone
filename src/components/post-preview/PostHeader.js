import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { HorizontalFlex, StyledLink, LightText, Hoverable } from '../../sc-css/atomic'
import { GlobalContext } from '../providers/GlobalProvider'
import SubAvatar from '../multi-usage/SubAvatar'

export default function PostHeader({ user, darkMode, post, sub }) {

    const location = useLocation().pathname
    const navigate = useNavigate()
    const { users } = useContext(GlobalContext)
    const [poster, setPoster] = useState()
    const [divMarginTop, setDivMarginTop] = useState(0)

    useEffect(() => {
        if (users) { setPoster(users.filter(user => user.id === post.data.poster)[0]) }
    }, [users])

    useEffect(() => {
        if (!user && location.split('/')[3] !== 'p' && location.split('/')[1] !== 'u') setDivMarginTop(8)
    })

    if (!poster) return <div>Loading</div>

    return (

        <Section style={{ marginTop: `${divMarginTop}px` }}>
            {
                location.split('/')[1] === 'r' || location.split('/')[3] === 'p' ? null :
                    <>
                        {
                            <HorizontalFlex style={{ marginRight: "2px", justifyContent: "center", height: "20px", width: "20px" }}>
                                <SubAvatar sub={sub} />
                            </HorizontalFlex>
                        }

                        <StyledLink style={{ marginLeft: "0" }} onClick={() => navigate(`/r/${sub.id}`)} className={`${darkMode}`}><strong>r/{sub.data.name}</strong></StyledLink>

                        <LightText>&middot;</LightText>
                    </>
            }

            <LightText>Posted by <Hoverable
                onClick={() => navigate(`/u/${poster.id}`)}
                className={`${darkMode}`}
            >u/{poster.data.userName}</Hoverable></LightText>

            <LightText>&middot;</LightText>

            <LightText>{
                post ?
                    post.data.timeStamp ?
                        post.data.timeStamp.toDate().toDateString()
                        : null
                    : null
            }</LightText>

        </Section>
    )
}

const Section = styled.section`
    display: flex;
    align-items:center;
    gap:3px;
    font-size:12px;
    margin-bottom:8px;
`
