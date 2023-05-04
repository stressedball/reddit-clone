import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { lightBorder, lightBackgroundColor, darkDefaultBorder } from '../../sc-css/COLORS'
import { ThemeContext } from '../providers/ThemeProvider'
import SubSideContent from '../sideContent/SubSideContent'
import HomeSideContent from '../sideContent/HomeSideContent'
import SubmitSideContent from '../sideContent/SubmitSideContent'
import UserSideContent from '../sideContent/UserSideContent'
import SubSettingsSideContent from '../sideContent/SubSettingsSideContent'

export default function SideContent() {

  const location = useLocation().pathname
  const [content, setContent] = useState()
  const { darkMode } = useContext(ThemeContext)

  useEffect(() => {

    if (location.split('/')[1] === 'reddit-clone') setContent(<HomeSideContent darkMode={darkMode} />)

    if (location.split('/')[1] === 'r' && location.split('/')[3] !== 'submit' && location.split('/')[3] !== 'subSettings')
      setContent(<SubSideContent subId={location.split('/')[2]} />)

    if (location === '/submit' || location.split('/')[3] === 'submit')
      setContent(<SubmitSideContent />)

    if (location.split('/')[1] === 'u') setContent(<UserSideContent />)

    if (location.split('/')[3] === 'subSettings') setContent(<SubSettingsSideContent />)

  }, [location])


  return (
    <StyledSideContent className={`${darkMode}`}>
      {content}
    </StyledSideContent>
  )
}


const StyledSideContent = styled.div`
  max-width:312px;
  width:100%;
  border: 1px solid ${lightBorder};
  background-color: ${lightBackgroundColor};
  font-size:14px;
  border-box: box-sizing;
  height: fit-content;
  border-radius:4px;

  &.dark {
    background-color: #1a1a1b;
    border: 1px solid ${darkDefaultBorder};
  }

  & > * {
    padding : 0 8px;
  }
`