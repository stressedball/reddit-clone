import { useNavigate } from 'react-router-dom'


export default function UserAvatar({ user }) {

    const navigate = useNavigate()

    return (
        <>
            {
                user ?
                    <img src={`https://api.dicebear.com/5.x/initials/svg?seed=${user.data.userName}`}
                        className='mouse-pointer avatar'
                        onClick={() => navigate(`u/${user.id}`)}
                    ></img>
                    :
                    null
            }
        </>
    )

}