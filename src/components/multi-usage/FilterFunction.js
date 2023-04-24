import Users from "../menu/Users"
import Subs from "../menu/Subs"
import { useContext, useEffect, useState, useRef } from "react"
import { GlobalContext } from "../providers/GlobalProvider"

export default function FilterFunction({ darkMode, searchString }) {

    const { subs, users, user } = useContext(GlobalContext)
    const [filteredSubs, setFilteredSubs] = useState()
    const [filteredUsers, setFilteredUsers] = useState()
    const [userSubs, setUserSubs] = useState([])
    const ref = useRef()

    useEffect(() => {
        setFilteredSubs(subsFilterFunction(searchString, subs))
        setFilteredUsers(usersFilterFunction(searchString, users))
    }, [searchString])

    useEffect(() => {
        if (user && subs) {
            setUserSubs(subs.filter(sub => user.data.subscribedSubs.includes(sub.id)))
        }
    }, [user.data.subscribedSubs, subs])

    return (
        <>
            {
                searchString === '' ?
                    <>
                        <Subs darkMode={darkMode} subs={userSubs} />
                        <Users darkMode={darkMode} users={users} />
                    </>
                    :
                    <>
                        {filteredSubs.length > 0 ? <Subs darkMode={darkMode} subs={filteredSubs} /> : null}
                        {filteredUsers.length > 0 ? <Users darkMode={darkMode} users={filteredUsers} /> : null}
                    </>
            }
        </>
    )
}

function subsFilterFunction(string, subs) {
    if (subs === undefined) return
    return subs.filter(sub => sub.data.name.toLowerCase().includes(string.toLowerCase()))
}

function usersFilterFunction(string, users) {
    if (users === undefined) return
    return users.filter(user => user.data.userName.toLowerCase().includes(string.toLowerCase()))
}