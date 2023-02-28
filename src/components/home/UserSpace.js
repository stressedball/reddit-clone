import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../providers/GlobalProvider'
import { auth } from '../../firebase/getAuthDb'

export default function UserSpace({ darkMode, handleDisplay }) {
  
  useEffect(() => {handleDisplay(false)}, [])

  const params = useParams()
  const { user, users } = useContext(GlobalContext)

  if (users.length === 0) return <div>Fetching data...</div>

  const urlUser = users.filter(user => user.id === params.userId)[0]

  return (

    <div >
      {
        user.id === params.userId ?
          <>
            <p>hello {user.data.userName}</p>
            <p>this is your id : {user.id}</p>
          </>
          :
          <>
            <p>{urlUser.data.userName} profile</p>
          </>
      }
      
      {
        urlUser.data.dateCreation ?
          <p>Joined RedditClone : {`${urlUser.data.dateCreation.toDate().toDateString()}`}</p>
          : null
      }

      {
        urlUser.data.status ?
          <p>Status : {urlUser.data.status}</p>
          : null
      }
    </div>
  )
}
