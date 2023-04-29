import { useLocation } from 'react-router-dom'
import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../providers/GlobalProvider'
import { getBanner } from './sub-settings.js/banner-settings/bannerData'
import SubSettingsShortcut from './SubSettingsShortcut'
import SubSubscribe from './SubSubscribe'
import { getAvatar } from './sub-settings.js/avatar-settings/avatarData'
import styled from 'styled-components'
import { HorizontalFlex } from '../../sc-css/atomic'
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

  useEffect(() => {
    if (!subs || !subId) return

    const tempSub = subs.filter(sub => sub.id === subId)[0]
    setSub(tempSub)

    if (!tempSub) return

    if (tempSub.data.banner) {
      getBanner(tempSub).then(path => {
        setBannerPath(path)
      })
    } else { setBannerPath(null) }

    if (tempSub.data.avatar) {
      getAvatar(tempSub).then(path => {
        setAvatarPath(path)
      })
    } else { setAvatarPath(null) }

  }, [subId, subs])

  if(!sub) return<div>Loading</div>

  return (
    <>
      <StyledDiv className={`${darkMode}`} >

        <img src={`${bannerPath}`} style={{ height: "150px", width: "100%" }}></img>

        <HorizontalFlex style={{ justifyContent: "space-between", padding: "0 24px" }}>

          <HorizontalFlex style={{ gap: "1rem", marginTop: "-14px" }}>

            <img src={`${avatarPath}`}
              style={{
                height: "80px",
                width: "80px",
                borderRadius: '50%',
                border: "1px solid"
              }}></img>

            {
              sub ?
              <h1 style={{ fontSize: "28px", fontWeight: "700" }}>{sub.data.name}</h1>
              : null
            }

            <SubSubscribe darkMode={darkMode} subs={subs} sub={sub} user={user} />

          </HorizontalFlex>

          {
            user ?
              sub.data.creator === user.id ?
                <SubSettingsShortcut darkMode={darkMode} sub={sub} /> : null
              : null
          }
        </HorizontalFlex>
      </StyledDiv>
    </>
  )
}

const StyledDiv = styled.div`
  background-color:${lightBackgroundColor};
  
  &.dark {
    background-color: ${darkTwo};
    color: inherit;
  }
`