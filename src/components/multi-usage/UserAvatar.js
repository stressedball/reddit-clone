import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Avatar = styled.img`
    border-radius: 50%;
        
    &:hover{ 
        cursor : pointer; 
        transform : rotateX(360deg);
    }

    &.no-hover {
        cursor : default; 
    }
`

export default function UserAvatar({ user }) {

    const location = useLocation().pathname.split('/')
    const navigate = useNavigate()
    const [noHover, setNoHover] = useState()

    useEffect(() => {
        if (location[2] === 'u') {
            setNoHover('no-hover')
        } else setNoHover('')
    }, [location])
    
    return (
        <>
            {
                user ?
                    <Avatar className={`${noHover} drop-down-menu`}
                        onClick={() => {
                            if (noHover === 'no-hover') return
                            navigate(`u/${user.id}`)
                        }}
                        src={`https://api.dicebear.com/5.x/initials/svg?seed=${user.data.userName}`} />
                    : null
            }
        </>
    )

}