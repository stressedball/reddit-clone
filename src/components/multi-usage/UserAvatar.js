import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Avatar = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
    
    &:hover{ 
        cursor : pointer; 
        transform : rotateX(360deg);
    }
`

export default function UserAvatar({ user }) {

    const navigate = useNavigate()

    return (
        <>
            {
                user ?
                    <Avatar
                        onClick={() => navigate(`u/${user.id}`)}
                        src={`https://api.dicebear.com/5.x/initials/svg?seed=${user.data.userName}`}
                    />
                    :
                    null
            }
        </>
    )

}