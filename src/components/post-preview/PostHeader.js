import styled from 'styled-components'
import { GlobalContext } from '../providers/GlobalProvider'
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { StyledLink, LightText, Hoverable } from '../../sc-css/atomic'

const Section = styled.section`
    display: flex;
    align-items:center;
    gap:3px;
    font-size:12px;
`

export default function PostHeader({ darkMode, post, sub }) {

    const location = useLocation().pathname
    const navigate = useNavigate()
    const { users } = useContext(GlobalContext)
    const [poster, setPoster] = useState()

    useEffect(() => {

        if (users) {
            const user = users.filter(user => user.id === post.data.poster)[0]
            setPoster(user)
        }

    }, [users])

    if (poster === undefined) return <div>Loading</div>

    return (

        <Section>
            {
                location.split('/')[1] === 'r' ? null :
                <>
                    <StyledLink onClick={() => navigate(`/r/${sub.id}`)}
                        className={`${darkMode}`}
                    ><strong>r/{sub.data.name}</strong>
                    </StyledLink>
                    <LightText>&middot;</LightText>
                </>
            }

            <LightText>Posted by <Hoverable
                onClick={() => navigate(`/u/${poster.id}`)}
                className={`${darkMode}`}
            >u/{poster.data.userName}</Hoverable></LightText>

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
