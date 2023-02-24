import '../../../css/dropdown.css'
import { GlobalContext } from '../../providers/GlobalProvider'
import React, { useState, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Menu from './Menu'

export default function DropDown({ darkMode }) {

  const location = useLocation().pathname
  const { users, subs } = useContext(GlobalContext)
  const [selectedOption, setSelectedOption] = useState('')
  const [display, setDisplay] = useState(false)

  useEffect(() => {

    const locationArrStrings = location.split('/')

    if (locationArrStrings[1] === 'r') {
      if (subs.length === 0) return
      const sub = subs.filter(sub => sub.id === locationArrStrings[2])[0]
      setSelectedOption(`r/${sub.data.name}`)
      return
    }

    if (locationArrStrings[1] === 'u') {
      if (users.length === 0) return
      const user = users.filter(user => user.id === locationArrStrings[2])[0]
      setSelectedOption(`u/${user.data.userName}`)
      return
    }

    if (locationArrStrings[1] === '') {
      setSelectedOption('Home')
      return
    }

    if (locationArrStrings[1] === 'submit') {
      setSelectedOption('Create post')
      return
    }

  }, [users, subs, location, display])


  const handleDisplay = () => { setDisplay(!display) }

  return (

    <div id='dropdown-container' className={`${darkMode}`}>

      <div id='dropdown-header'>

        <p className={`${darkMode} tile mouse-pointer`}
          onClick={() => {
            setDisplay(!display)
          }}
        >{selectedOption}</p>
      </div>

      {
        display ?
          <Menu darkMode={darkMode} users={users} subs={subs} handleDisplay={handleDisplay} />
          : null
      }
    </div>
  )
}

