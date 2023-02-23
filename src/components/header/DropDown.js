import '../../css/dropdown.css'
import { GlobalContext } from '../providers/GlobalProvider'
import React, { useState, useContext, useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

export default function DropDown({ darkMode }) {

  const navigate = useNavigate()
  const location = useLocation().pathname
  const { users, subs, posts } = useContext(GlobalContext)
  const [selectedOption, setSelectedOption] = useState('')
  const [display, setDisplay] = useState(false)
  const [styleBorder, setStyleBorder] = useState('')

  useEffect(() => {

    const locationArrStrings = location.split('/')

    if (locationArrStrings[1] === 'r' || locationArrStrings[1] === 'u') {
      setSelectedOption(`${locationArrStrings[1]}/${location.split('/')[2]}`)
      return
    }

    setSelectedOption(location.split('/')[1])

  }, [location])

  return (

    <div id='dropdown-container' className={`${styleBorder} ${darkMode}`}>

      <div id='dropdown-header'>

        <p className='tile mouse-pointer'
          onClick={() => {
            setDisplay(!display)
            styleBorder === '' ? setStyleBorder('bottom-border') : setStyleBorder('')
          }}
        >Home</p>

        {
          display ?
            <Menu
              darkMode={darkMode}
              users={users}
              subs={subs}
            />
            : null
        }
      </div>

    </div>
  )
}


function Menu({ darkMode, subs, users }) {

  return (
    <div className={`${darkMode} displayed`}>

      <div style={{
        paddingLeft: '0.5rem'
      }}>
        <input
          className={`${darkMode}`}
          placeholder={'Filter'}
        />
      </div>

      <p className='tile mouse-pointer'>Subs</p>
      {
        subs.map(sub => {
          return (
            <p className='tile mouse-pointer'>{sub.data.name}</p>
          )
        })
      }

      <p className='tile mouse-pointer'>Users</p>

      {
        users.map(user => {
          return (
            <p className='tile mouse-pointer'>{user.data.userName}</p>
          )
        })
      }
    </div>
  )
}
