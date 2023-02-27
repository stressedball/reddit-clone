import { useNavigate } from "react-router-dom"

export default function Users({ handleDisplay, darkMode, users }) {

    const navigate = useNavigate()

    return (
        <>
            <p className={`${darkMode} tile mouse-pointer drop-down-menu`} value='Users'>Users</p>

            {
                users.map(user => {
                    return (
                        <p
                            key={user.id}
                            onClick={() => {
                                handleDisplay()
                                navigate(`u/${user.id}`)
                            }}
                            className={`${darkMode} tile mouse-pointer drop-down-menu`}
                        >{user.data.userName}</p>
                    )
                })
            }
        </>
    )
}