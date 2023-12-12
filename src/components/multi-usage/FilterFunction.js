import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../providers/GlobalProvider"
import Subs from "../menu/Subs"
import Users from "../menu/Users"

export default function FilterFunction({ darkMode, searchString, handleCreateSub }) {

    const { subscribedSubs, subs, user, users } = useContext(GlobalContext)
    const [filteredSubs, setFilteredSubs] = useState()
    const [filteredUsers, setFilteredUsers] = useState()
    const [userSubs, setUserSubs] = useState([])

    useEffect(() => {
        if (subscribedSubs && subs && user) setUserSubs(subs.filter(sub => subscribedSubs.includes(sub.id)))
    }, [subscribedSubs, subs, user])

    useEffect(() => {
        setFilteredSubs(subsFilterFunction(searchString, subs))
        setFilteredUsers(usersFilterFunction(searchString, users))
    }, [searchString])

    if (!filteredSubs || !filteredUsers) return
    
    return (
        <>
            {
                searchString === '' ?
                    <>
                        <Subs user={user} handleCreateSub={handleCreateSub} darkMode={darkMode} subs={userSubs} />
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
    if (!subs) return
    return subs.filter(sub => sub.data.name.toLowerCase().includes(string.toLowerCase()))
}

function usersFilterFunction(string, users) {
    if (!users) return
    return users.filter(user => user.data.userName.toLowerCase().includes(string.toLowerCase()))
}