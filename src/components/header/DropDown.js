import React, { useState, useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../providers/GlobalProvider'

export default function DropDown() {

  const navigate = useNavigate()
  const location = useLocation().pathname
  const { users, subs, posts } = useContext(GlobalContext)
  const [selectedOption, setSelectedOption] = useState('')

  useEffect(() => {

    setSelectedOption(location.split('/')[1])
    
  }, [location])

  return (

    <select
      value={selectedOption}  
      onChange={(e) => {
        navigate(`/${e.target.value}`)
      }}
    >

      <option value={''}>Home</option>
      <option value={'submit'}>Create Post</option>
      <option>Subs</option>

      {
        subs === undefined ?
          null :
          subs.map(sub => {
            return (
              <option
                key={sub.id}
                value={`${sub.id}`}
              >{sub.data.name}</option>
            )
          })
      }

      <option>Users</option>
      {
        users === undefined ?
          null :
          users.map(user => {
            return <option
              key={user.id}
              value={`${user.id}`}
            >{user.data.userName}</option>
          })
      }

    </select>
  )
}
