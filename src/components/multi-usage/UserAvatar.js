import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import styled from 'styled-components'

export default function UserAvatar({ user, navigation }) {

    const location = useLocation().pathname.split('/')
    const navigate = useNavigate()
    const [noHover, setNoHover] = useState()

    useEffect(() => {
        if (location[2] === 'u' || !navigation) {
            setNoHover('no-hover')
        } else setNoHover('')
    }, [location])
    
    return (
        <>
            {
                user ?
                    <Avatar className={`${noHover}`}
                        onClick={() => {
                            if (!navigation) return
                            if (noHover === 'no-hover') return
                            navigate(`/u/${user.id}`)
                        }}
                        src={`https://api.dicebear.com/5.x/initials/svg?seed=${user.data.userName}`} />
                    : null
            }
        </>
    )

}

const Avatar = styled.img`
    border-radius: 50%;
    max-width:100%;
    max-height: 100%;
        
    &:hover{ 
        cursor : pointer; 
    }

    &.no-hover {
        cursor : default; 
    }
`