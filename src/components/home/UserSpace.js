import React, { useContext } from 'react'
import { GlobalContext } from '../providers/GlobalProvider'

export default function UserSpace() {

  const { user, users, posts, subs } = useContext(GlobalContext)

  if (users === undefined || user === undefined || posts === undefined || subs === undefined) return <div>Fetching data...</div>








  return (

    <div id='userspace-container'>
  
  
    </div>
  )
}
