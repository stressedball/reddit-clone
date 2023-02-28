import '../../../css/dropdown.css'
import { GlobalContext } from '../../providers/GlobalProvider'
import React, { useState, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Menu from './drop-down-menu/Menu'

export default function DropDown({ darkMode }) {

  const location = useLocation().pathname
  const { users, subs } = useContext(GlobalContext)
  const [selectedOption, setSelectedOption] = useState('')
  const [display, setDisplay] = useState(false)

  useEffect(() => {

    const locationArrStrings = location.split('/')

    const option = getOption(locationArrStrings, users, subs)
    setSelectedOption(option)

  }, [users, subs, location, display])

  useEffect(() => {

    function toggleDisplay(e) {
      if (display) {
        if (!e.target.classList.contains('drop-down-menu')) setDisplay(false)
      }
    }

    window.addEventListener('click', toggleDisplay)

    return () => window.removeEventListener('click', toggleDisplay)

  }, [display])

  const handleDisplay = () => { setDisplay(!display) }

  return (

    <div id='dropdown-container' className={`${darkMode} drop-down-menu`}>

      <div id='dropdown-header' className='drop-down-menu'>

        <p className={`${darkMode} tile mouse-pointer drop-down-menu`}
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

function getOption(locationArrStrings, users, subs) {

  if (locationArrStrings[1] === 'r') {
    if (subs === undefined || subs.length === 0) return
    const sub = subs.filter(sub => sub.id === locationArrStrings[2])[0]
    return `r/${sub.data.name}`
  }

  if (locationArrStrings[1] === 'u') {
    if (users.length === 0) return

    const user = users.filter(user => user.id === locationArrStrings[2])[0]
    return `u/${user.data.userName}`
  }

  if (locationArrStrings[1] === '') return 'Home'

  if (locationArrStrings[1] === 'submit') return 'Create post'

}