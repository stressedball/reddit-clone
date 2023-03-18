import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../providers/GlobalProvider'

export default function UserSpace() {

  const params = useParams()
  const { user, users } = useContext(GlobalContext)

  if (users.length === 0 || user === undefined) return <div>Fetching data...</div>

  const userByUrl = users.filter(user => user.id === params.userId)[0]

  return (

    <div id='userspace-container'>
      {
        user ?
          user.id === params.userId ?
            <>
              <p>hello {user.data.userName}</p>
              <p>this is your id : {user.id}</p>
            </>
            : null
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
        user ?
          user.id === params.userId ?
            null : <p>Last seen : {userByUrl.data.lastSeen.toDate().toDateString()}</p>
          : null
      }

      {
        userByUrl.data.status ?
          <p>Status : {userByUrl.data.status}</p>
          : null
      }
    </div>
  )
}
