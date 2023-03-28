import { useNavigate } from "react-router-dom"
import { Tile, MenuSmallTitles } from "../../sc-css/atomic"
import UserAvatar from "../multi-usage/UserAvatar"

export default function Users({ darkMode, users }) {

    const navigate = useNavigate()

    return (
        <>
            <MenuSmallTitles className={`${darkMode} drop-down-menu`} value='Users'>Users</MenuSmallTitles>

            {
                users.map(user => {
                    return (
                        <Tile className={`${darkMode}`} key={user.id}
                            onClick={() => { navigate(`u/${user.id}`) }}
                            style={{ gap: "3px" }}
                        >
                            <div style={{ width: "20px", display: "flex" }}>
                                <UserAvatar user={user} />
                            </div>
                            <p style={{ margin: "0" }}>u/{user.data.userName}</p>
                        </Tile>
                    )
                })
            }
        </>
    )
}