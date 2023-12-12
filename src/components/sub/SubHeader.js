import { useLocation } from 'react-router-dom'
import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../providers/GlobalProvider'
import { getBanner } from './sub-settings.js/banner-settings/bannerData'
import SubSettingsShortcut from './SubSettingsShortcut'
import SubSubscribe from './SubSubscribe'
import { getAvatar } from './sub-settings.js/avatar-settings/avatarData'
import styled from 'styled-components'
import { HorizontalFlex, SubAvatar } from '../../sc-css/atomic'
import { darkTwo, lightBackgroundColor } from '../../sc-css/COLORS'
import { ThemeContext } from '../providers/ThemeProvider'

export default function SubHeader() {

  const [subId, setSubId] = useState()
  const location = useLocation().pathname
  const { subs, user } = useContext(GlobalContext)
  const [sub, setSub] = useState()
  const [bannerPath, setBannerPath] = useState()
  const [avatarPath, setAvatarPath] = useState(null)
  const { darkMode } = useContext(ThemeContext)

  useEffect(() => {
    if (location.split('/')[1] === 'r') setSubId(location.split('/')[2])
  }, [location])

  useEffect(() => { if (subs && subId) setSub(subs.filter(sub => sub.id === subId)[0]) }, [subId, subs])

  useEffect(() => {
    if (!sub) return

    if (sub.data.banner) getBanner(sub).then(path => { setBannerPath(path) })
    else { setBannerPath(null) }

    if (sub.data.avatar) getAvatar(sub).then(path => { setAvatarPath(path) })
    else { setAvatarPath(null) }

  }, [sub])

  if (!sub) return <div>Loading</div>

  return (
    <>
      <StyledDiv className={`${darkMode}`} >

        {
          bannerPath ?
            <img src={`${bannerPath}`} style={{ maxHeight: "150px" }}></img>
            :
            <div style={{ minHeight: "100px", backgroundColor: `${sub.data.skin}` }}></div>
        }


        <HorizontalFlex style={{ marginTop: "-14px", justifyContent: "space-between", padding: "0 24px" }}>

          <HorizontalFlex >

            <SubAvatar src={`${avatarPath}`} />

            {
              sub ?
                <TitleDiv>
                  <H1 style={{}}>{sub.data.name}</H1>
                  <H2>r/{sub.data.name}</H2>
                </TitleDiv>
                : null
            }

            <SubSubscribe subs={subs} sub={sub} user={user} />

          </HorizontalFlex>

          {
            user ?
              sub.data.creator === user.id ?
                <SubSettingsShortcut sub={sub} /> : null
              : null
          }

        </HorizontalFlex>
      </StyledDiv>
    </>
  )
}

const StyledDiv = styled.div`
  background-color:${lightBackgroundColor};
  padding-bottom:12px;

  &.dark {
    background-color: ${darkTwo};
    color: inherit;
  }
`

const H1 = styled.h1`
  font-size: 28px;
  font-weight: 700;
  margin:0;
  padding-bottom: 4px;
  padding-right: 24px;
`

const H2 = styled.h2`
  font-size: 14px;
  color:#7c7c7c;
  font-weight: 600;
  margin:0;

  &.dark {
    color:#818384;
  }
`

const TitleDiv = styled.div`
  display:flex;
  flex-direction:column;
  padding-left: 16px;
  margin-top: 24px;
`