import { useNavigate } from 'react-router-dom'


export default function UserAvatar({ user }) {

    const navigate = useNavigate()

    return (
        <div>
            {
                user ?
                    <img src={`https://api.dicebear.com/5.x/initials/svg?seed=${user.data.userName}`}
                        className='mouse-pointer'
                        style={{
                            height: "30px",
                            borderRadius: '50%'
                        }}
                        onFocus={(e) => console.log(e.target)}
                        onClick={() => navigate(`u/${user.id}`)}
                    ></img>
                    :
                    null
            }
        </div>
    )

}