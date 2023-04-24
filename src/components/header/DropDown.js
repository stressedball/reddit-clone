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

        {dropdownMenu ?
          // pin off
          <div>
            {
              display ?
                <SVGStyled onClick={() => handleMenuDisplay()}
                  style={{ width: "22px", height: "22px", fill: "none" }} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)">
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />
                  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" />
                  <g id="SVGRepo_iconCarrier"> <path style={{ stroke: "currentColor" }} d="M14.579 14.579L11.6316 17.5264L10.7683 16.6631C10.3775 16.2723 10.1579 15.7422 10.1579 15.1894V13.1053L7.21052 10.158L5 9.42111L9.42111 5L10.158 7.21052L13.1053 10.1579L15.1894 10.1579C15.7422 10.1579 16.2722 10.3775 16.6631 10.7683L17.5264 11.6316L14.579 14.579ZM14.579 14.579L19 19" strokeLinecap="round" strokeLinejoin="round" /> </g>
                </SVGStyled>
                : null
            }

            {/* small arrow in dropdown header */}
            <SVGStyled className='drop-down-menu' viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M759.2 419.8L697.4 358 512 543.4 326.6 358l-61.8 61.8L512 667z" /></SVGStyled>

          </div>
          : null}

      </DropDownHeaderStyled>

      {
        dropdownMenu ?
          display ?
            <DropDownDisplayed className={darkMode}>
              <StyledMenu className={`${darkMode}`}>
                <Menu dropdownMenu={dropdownMenu} handleMenuDisplay={handleMenuDisplay} />
              </StyledMenu>
            </DropDownDisplayed>
            : null : null
      }
    </DropDownContainerStyled>
  )
}
