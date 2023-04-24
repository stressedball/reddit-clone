import Users from "../menu/Users"
import Subs from "../menu/Subs"
import { useContext, useEffect, useState } from "react"
import { GlobalContext } from "../providers/GlobalProvider"

export default function FilterFunction({ darkMode, searchString }) {

    const { subs, users } = useContext(GlobalContext)
    const [filteredSubs, setFilteredSubs] = useState()
    const [filteredUsers, setFilteredUsers] = useState()

    useEffect(() => {
        setFilteredSubs(subsFilterFunction(searchString, subs))
        setFilteredUsers(usersFilterFunction(searchString, users))
    }, [searchString])

    return (
        <>
            {
                searchString === '' ?
                    <>
                        <Subs darkMode={darkMode} subs={subs} />
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