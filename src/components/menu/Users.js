import { useNavigate } from "react-router-dom"
import { Tile } from "../../sc-css/atomic"

export default function Users({ darkMode, users }) {

    const navigate = useNavigate()

    return (
        <>
            <p className={`${darkMode} tile mouse-pointer drop-down-menu`} value='Users'>Users</p>

            {
                users.map(user => {
                    return (
                        <Tile
                            key={user.id}
                            onClick={() => { navigate(`u/${user.id}`) }}
                            className={`${darkMode} tile mouse-pointer drop-down-menu`}
                        >{user.data.userName}</Tile>
                    )
                })
            }
        </>
    )
}