import { useNavigate } from "react-router-dom"
import { Tile, MenuSmallTitles } from "../../sc-css/atomic"

export default function Users({ darkMode, users }) {

    const navigate = useNavigate()

    return (
        <>
            <MenuSmallTitles className={`${darkMode} drop-down-menu`} value='Users'>Users</MenuSmallTitles>

            {
                users.map(user => {
                    return (
                        <Tile className={`${darkMode} drop-down-menu`} key={user.id}
                            onClick={() => { navigate(`u/${user.id}`) }}
                        >{user.data.userName}</Tile>
                    )
                })
            }
        </>
    )
}