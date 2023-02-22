import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { GlobalContext } from '../providers/GlobalProvider'
import { auth } from '../../firebase/getAuthDb'

export default function UserSpace() {

  const params = useParams()
  const { user } = useContext(GlobalContext)

  return (
    <div>
      <p>hello {user.data.userName}</p>
      <p>this is your id : {user.id}</p>
      <p>better : you created your account : { }</p>
      <p>And the best is : status</p>
    </div>
  )
}
