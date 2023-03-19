import { GlobalContext } from '../providers/GlobalProvider'
import React, { useState, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Menu from '../menu/Menu'
import { DropDownContainerStyled, DropDownHeaderStyled, DropDownDisplayed } from '../../sc-css/DropDownStyle'
import { StyledMenu } from '../../sc-css/StyledMenu'

export default function DropDown({ darkMode, dropdownMenu, handleMenuDisplay }) {

  const [display, setDisplay] = useState(false)
  const location = useLocation().pathname
  const [selectedOption, setSelectedOption] = useState('')
  const [isDropdownMenu, setIsDropdownMenu] = useState('not-drop')
  const { users, subs } = useContext(GlobalContext)

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

  useEffect(() => {
    if (dropdownMenu) setIsDropdownMenu('dropped')
    else setIsDropdownMenu('not-drop')
  }, [dropdownMenu])

  return (

    <DropDownContainerStyled className={`${display} ${darkMode} ${isDropdownMenu} drop-down-menu`}
      onClick={() => { if (dropdownMenu) setDisplay(!display) }}
    >

      <DropDownHeaderStyled className='drop-down-menu'>

        <p className={`${darkMode} drop-down-menu`}>{selectedOption}</p>
      </DropDownHeaderStyled>

      <DropDownDisplayed>
        {
          display ?
            dropdownMenu ?
              <StyledMenu className={`${darkMode}`}>
                <Menu dropdownMenu={dropdownMenu} handleMenuDisplay={handleMenuDisplay} />
              </StyledMenu>
              : null : null
        }
      </DropDownDisplayed>
    </DropDownContainerStyled>
  )
}

function getOption(locationArrStrings, users, subs) {

  if (locationArrStrings[1] === 'r') {
    if (subs === undefined) return
    const sub = subs.filter(sub => sub.id === locationArrStrings[2])[0]
    return `r/${sub.data.name}`
  }

  if (locationArrStrings[1] === 'u') {
    if (users === undefined) return
    const user = users.filter(user => user.id === locationArrStrings[2])[0]
    return `u/${user.data.userName}`
  }

  if (locationArrStrings[1] === '') return 'Home'

  if (locationArrStrings[1] === 'submit') return 'Create post'

}