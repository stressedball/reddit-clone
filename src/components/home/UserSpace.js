import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../providers/GlobalProvider'
import '../../css/userspace.css'

export default function UserSpace({ darkMode, handleDisplay }) {

  useEffect(() => { handleDisplay(false) }, [])
  
  const params = useParams()
  const { user, users } = useContext(GlobalContext)

  if (users.length === 0 || user=== undefined) return <div>Fetching data...</div>

  const userByUrl = users.filter(user => user.id === params.userId)[0]

  return (

    <div id='userspace-container'>
      {
        user.id === params.userId ?
          <>
            <p>hello {user.data.userName}</p>
            <p>this is your id : {user.id}</p>
          </>
          :
          <>
            <p>{userByUrl.data.userName} profile</p>
          </>
      }

        {
        userByUrl.data.dateCreation ?
          <p>Joined RedditClone : {`${userByUrl.data.dateCreation.toDate().toDateString()}`}</p>
          : null
      }

      {
        user.id === params.userId ? null
          : <p>Last seen : {userByUrl.data.lastSeen.toDate().toDateString() }</p>
      }

      {
        userByUrl.data.status ?
          <p>Status : {userByUrl.data.status}</p>
          : null
      }
    </div>
  )
}
