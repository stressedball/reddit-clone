import React, { useState, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Menu from '../menu/Menu'
import getOption from './getOption'
import { DropDownContainerStyled, DropDownHeaderStyled, DropDownDisplayed } from '../../sc-css/DropDownStyle'
import { StyledMenu } from '../../sc-css/StyledMenu'
import { SVGStyled } from '../../sc-css/atomic'
import { GlobalContext } from '../providers/GlobalProvider'

export default function DropDown({ darkMode, dropdownMenu, handleMenuDisplay }) {

  const [display, setDisplay] = useState(false)
  const location = useLocation().pathname
  const [selectedOption, setSelectedOption] = useState('')
  const [isDropdownMenu, setIsDropdownMenu] = useState('not-drop')
  const { users, subs } = useContext(GlobalContext)

  useEffect(() => {
    const locationArrStrings = location.split('/')
    const option = getOption(locationArrStrings, users, subs, darkMode)
    setSelectedOption(option)
  }, [users, subs, location])

  useEffect(() => {
    if (dropdownMenu) setIsDropdownMenu('dropped')
    else setIsDropdownMenu('not-drop')
  }, [dropdownMenu])

  useEffect(() => {
    const keepMenu = (e) => {
      if (!e.target.classList.contains('drop-down-menu')) setDisplay(false)
    }

    window.addEventListener('click', keepMenu)
    return () => window.removeEventListener('click', keepMenu)
  }, [display])

  return (

    <DropDownContainerStyled className={`${display} ${darkMode} ${isDropdownMenu} drop-down-menu`}
      onClick={() => { if (dropdownMenu) setDisplay(!display) }}>

      <DropDownHeaderStyled style={{ justifyContent: "space-between" }} className='drop-down-menu'>

        <div className='drop-down-menu'>{selectedOption}</div>

        {/* small arrow in dropdown header */}
        {dropdownMenu ? <SVGStyled className='drop-down-menu' viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M759.2 419.8L697.4 358 512 543.4 326.6 358l-61.8 61.8L512 667z" /></SVGStyled> : null}

      </DropDownHeaderStyled>

      <DropDownDisplayed>
        {
          dropdownMenu ?
            display ?
              <StyledMenu className={`${darkMode}`}>
                <Menu dropdownMenu={dropdownMenu} handleMenuDisplay={handleMenuDisplay} />
              </StyledMenu>
              : null : null
        }
      </DropDownDisplayed>
    </DropDownContainerStyled>
  )
}


