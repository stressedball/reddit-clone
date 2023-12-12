import React from 'react'
import styled from 'styled-components'
import UserAvatar from '../multi-usage/UserAvatar'
import SubAvatar from '../multi-usage/SubAvatar'
import { HorizontalFlex } from '../../sc-css/atomic'
import HomeSVG from '../multi-usage/SVGs/HomeSVG'
import CreateSVG from '../multi-usage/SVGs/CreateSVG'

export default function getOption(locationArrStrings, users, subs) {

  if (locationArrStrings[1] === 'r') {
    if (subs === undefined) return
    const sub = subs.filter(sub => sub.id === locationArrStrings[2])[0]
    return (
      <HorizontalFlex>
        <SVGDiv className='drop-down-menu'>
          <HorizontalFlex style={{ width: "20px", height: "20px" }}>
            <SubAvatar sub={sub} />
          </HorizontalFlex>
        </SVGDiv>
        <StyledP className="drop-down-menu">r/{sub.data.name}</StyledP>
      </HorizontalFlex>
    )
  }

  if (locationArrStrings[1] === 'u') {
    if (users === undefined) return
    const user = users.filter(user => user.id === locationArrStrings[2])[0]
    return (
      <HorizontalFlex>
        <SVGDiv className='drop-down-menu'>
          <SVGDiv style={{ width: "20px" }}> {/* quick easy cheat */}
            <UserAvatar user={user} />
          </SVGDiv>
        </SVGDiv>
        <StyledP className="drop-down-menu">u/{user.data.userName}</StyledP>
      </HorizontalFlex>
    )
  }

  if (locationArrStrings[1] === 'reddit-clone') return (
    <HorizontalFlex>
      <SVGDiv className='drop-down-menu'>
        <HomeSVG />
      </SVGDiv>
      <StyledP className="drop-down-menu">Home</StyledP>
    </HorizontalFlex>
  )

  if (locationArrStrings[1] === 'submit') return (
    <HorizontalFlex>
      <SVGDiv className='drop-down-menu'>
        <CreateSVG />
      </SVGDiv>
      <StyledP className="drop-down-menu">Create post</StyledP>
    </HorizontalFlex>
  )

}

const SVGDiv = styled.div`
  width:40px;
  display:flex;
  align-items:center;
  justify-content:center;
`

const StyledP = styled.h1`
  margin:0;
  font-size: 14px;
  font-weight:500;
`