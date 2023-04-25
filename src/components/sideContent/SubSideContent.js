import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { GlobalContext } from '../providers/GlobalProvider'
import { HorizontalFlex, SVGStyled, HR } from '../../sc-css/atomic'
import { lightText } from '../../sc-css/COLORS'
import { ThemeContext } from '../providers/ThemeProvider'

export default function SubSideContent({ subId }) {

  const { darkMode } = useContext(ThemeContext)
  const { subs } = useContext(GlobalContext)
  const [sub, setSub] = useState()
  const location = useLocation().pathname

  useEffect(() => {
    if (subs !== undefined) { setSub(subs.filter(sub => sub.id === subId)[0]) }
  }, [subs, subId])

  if (sub === undefined) return <div>Loading</div>

  return (
    <div>

      <p style={{ fontSize: "14px", fontWeight: "700" }}>About Community</p>

      <p >{sub.data.description}</p>

      <HorizontalFlex style={{ gap: "8px" }}>
        <SVGStyled
          style={{ fontWeight: "400" }}
          version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xmlSpace="preserve">
          <g>            <g>              <g>
            <path d="M501.333,244.947c-0.747,0.107-1.387,0.213-2.027,0.427h-61.973v-96c0-5.867-4.8-10.667-10.667-10.667h-53.333
				c-5.867,0-10.667,4.8-10.667,10.667v96H288v-96c0-5.867-4.8-10.667-10.667-10.667H224c-5.867,0-10.667,4.8-10.667,10.667v96h-64
				v-96c0-5.867-4.8-10.667-10.667-10.667H85.333c-5.867,0-10.667,4.8-10.667,10.667v96H12.693c-0.64-0.213-1.387-0.32-2.027-0.427
				C4.8,244.947,0,249.747,0,255.613v200.32c0,25.493,20.267,45.44,46.293,45.44h417.92C490.56,501.373,512,481,512,455.933v-200.32
				C512,249.747,507.2,244.947,501.333,244.947z M384,160.04h32v85.333h-32V160.04z M234.667,160.04h32v85.333h-32V160.04z
				 M96,160.04h32v85.333H96V160.04z M490.667,455.933c0,13.547-11.627,24.107-26.453,24.107H46.293c-14.4,0-24.96-10.133-24.96-24
				V342.973c14.72,14.72,34.88,24.427,52.48,24.427c21.653,0,42.453-14.4,54.4-34.24c14.187,23.36,40.533,39.68,63.36,39.68
				s49.387-16.427,63.467-39.893c14.187,23.467,40.64,39.893,63.573,39.893c22.933,0,49.28-16.427,63.467-39.787
				C394.027,353,415.147,367.4,437.013,367.4c18.027,0,38.72-9.707,53.653-24.533V455.933z M490.667,304.04
				c-3.733,22.187-32.533,43.413-53.653,43.413c-22.08,0-44.587-24.64-44.587-48.96c0-4.053-2.24-7.893-5.973-9.387
				c-7.467-2.987-14.507,2.347-14.507,9.387c0,27.52-30.507,54.4-53.333,54.4s-53.227-26.773-53.227-54.293
				c0-5.333-4.053-9.92-9.387-10.347c-6.08-0.533-11.093,4.267-11.093,10.24c0,27.52-30.507,54.4-53.227,54.4
				c-22.72,0-53.12-26.773-53.227-54.293c0-5.333-4.053-9.92-9.387-10.347c-6.08-0.533-11.093,4.267-11.093,10.24
				c0,24.213-22.187,48.96-44.053,48.96c-20.693,0-48.853-21.44-52.48-44.053v-36.693h469.227V304.04z"/>
            <path d="M400,117.373c26.453,0,48-20.053,48-44.8c0-22.613-34.133-53.333-41.067-59.307c-4.053-3.52-9.92-3.52-13.973,0
				C386.133,19.24,352,49.96,352,72.573C352,97.32,373.547,117.373,400,117.373z M400,35.88
				c13.867,13.333,26.667,29.547,26.667,36.8c0,12.907-11.947,23.467-26.667,23.467c-14.72,0-26.667-10.56-26.667-23.467
				C373.333,65.427,386.133,49.213,400,35.88z"/>
            <path d="M250.667,117.373c26.453,0,48-20.053,48-44.8c0-22.613-34.133-53.333-40.96-59.307c-4.053-3.52-9.92-3.52-13.973,0
				c-6.933,5.973-41.067,36.693-41.067,59.307C202.667,97.32,224.213,117.373,250.667,117.373z M250.667,35.88
				c13.867,13.333,26.667,29.547,26.667,36.8c0,12.907-11.947,23.467-26.667,23.467c-14.72,0-26.667-10.56-26.667-23.467
				C224,65.427,236.8,49.213,250.667,35.88z"/>
            <path d="M112,117.373c26.453,0,48-20.053,48-44.8c0-22.613-34.133-53.333-40.96-59.307c-4.053-3.52-9.92-3.52-13.973,0
				C98.133,19.24,64,49.96,64,72.573C64,97.32,85.547,117.373,112,117.373z M112,35.88c13.867,13.333,26.667,29.547,26.667,36.8
				c0,12.907-11.947,23.467-26.667,23.467c-14.72,0-26.667-10.56-26.667-23.467C85.333,65.427,98.133,49.213,112,35.88z"/>
          </g>          </g>          </g>
        </SVGStyled>

        <p style={{ margin: "0", fontSize: "14px", color: "rgb(124, 124, 124)", fontWeight: "400" }}>Created {sub.data.dateOfCreation.toDate().toDateString()}</p>
      </HorizontalFlex>

      <HR />

      <HorizontalFlex style={{ gap: "4px" }}>
        <p style={{ margin: "0", fontSize: "16px", fontWeight: "500" }}>{sub.data.users.length}</p>
        {sub.data.users.length <= 1 ?
          <StyledText>Member</StyledText>
          :
          <StyledText>Members</StyledText>
        }
      </HorizontalFlex>

      <HR />

      <a href={`${location.split('/')[3] === 'p' ? `/r/${location.split('/')[2]}` : location}/submit`}>
        <Button className={`${darkMode}`}>Create Post</Button>
      </a>
    </div>
  )
}

const Button = styled.button`
  font-size:14px;
  font-weight:700;
  background-color: #4a96c4;
  min-height: 32px;
  min-width: 100%;
  padding:4px 0;
  border:none;
  border-radius: 1.5rem;
  color:#ffffff;
  margin-bottom:14px;
  box-sizing:border-box;
  position:relative;
  text-decoration: none;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: inherit;
    width: 100%;
    height: 100%;
    background-color: #ffffff;
    content:"";
    opacity: 0;
  }

  &.dark {
    color: #1a1a1b;
    background-color: #d7dadc;
  }

  &:hover {
    cursor: pointer;
  }

  &:hover::before {
    opacity: 0.08;
  }
`

const StyledText = styled.p`
  margin: 0; 
  font-size: 12px; 
  color: rgb(124, 124, 124); 
  fontWeight: 400;
`