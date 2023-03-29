import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { lightBorder, lightBackgroundColor, darkDefaultBorder } from '../../sc-css/COLORS'
import { ThemeContext } from '../providers/ThemeProvider'
import SubSideContent from '../sideContent/SubSideContent'
import HomeSideContent from '../sideContent/HomeSideContent'
import SubmitSideContent from '../sideContent/SubmitSideContent'

const StyledSideContent = styled.div`
  min-width: 312px;
  width:312px;
  border: 1px solid ${lightBorder};
  background-color: ${lightBackgroundColor};
  font-size:14px;
  padding : 0 8px 0 8px;
  border-box: box-sizing;
  height: fit-content;
  border-radius:4px;
  margin-left:24px;

  &.dark {
    background-color: #1a1a1b;
    border: 1px solid ${darkDefaultBorder};
  }
`

export default function SideContent() {

  const location = useLocation().pathname
  const [content, setContent] = useState()
  const { darkMode } = useContext(ThemeContext)

  useEffect(() => {

    if (location === '/')
      setContent(<HomeSideContent darkMode={darkMode} />)

    if (location.split('/')[1] === 'r')
      setContent(<SubSideContent darkMode={darkMode} subId={location.split('/')[2]} />)

    if (location === '/submit')
      setContent(<SubmitSideContent />)
  }, [location])


  return (
    <StyledSideContent className={`${darkMode}`}>
      {content}
    </StyledSideContent>
  )
}