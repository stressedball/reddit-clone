import { useNavigate } from "react-router-dom"
import { Tile, MenuSmallTitles, HorizontalFlex } from "../../sc-css/atomic"
import UserAvatar from "../multi-usage/UserAvatar"

export default function Users({ darkMode, users }) {

    const navigate = useNavigate()

    return (
        <div className="drop-down-menu">
            <MenuSmallTitles className={`${darkMode} drop-down-menu`} value='Users'>Users</MenuSmallTitles>

            {
                users.map(user => {
                    return (
                        <Tile className={`${darkMode}`} key={user.id}
                            onClick={() => { navigate(`u/${user.id}`) }}>

                            <HorizontalFlex style={{ justifyContent: "center", height: "22x", width: "22px" }}>
                                <UserAvatar user={user} />
                            </HorizontalFlex>

                            <p style={{ margin: "0", marginLeft: "8px" }}>u/{user.data.userName}</p>

                        </Tile>
                    )
                })
            }
        </div>
    )
}