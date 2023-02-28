import { useLocation } from 'react-router-dom'
import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../../providers/GlobalProvider'
import { getBanner } from '../sub-settings.js/banner-settings/bannerData'
import SubSettingsShortcut from './SubSettingsShortcut'
import SubSubscribe from './SubSubscribe'
import { getAvatar } from '../sub-settings.js/avatar-settings/avatarData'

export default function SubHeader({ darkMode }) {

  const subId = useLocation().pathname.split('/')[2]
  const { subs, user } = useContext(GlobalContext)
  const [sub, setSub] = useState()
  const [bannerPath, setBannerPath] = useState()
  const [avatarPath, setAvatarPath] = useState(null)

  useEffect(() => {

    if (subs === undefined) return

    const tempSub = subs.filter(sub => sub.id === subId)[0]
    setSub(tempSub)

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

  if (sub === undefined) return <div>Fetching sub data</div>
  
  return (

    <div>

      <img src={`${bannerPath}`}
        style={{
          height: "245px", width: "100vw",
        }}></img>

      <div id='sub-settings-shortcut' className='horizontal flex'>

        <div className='horizontal flex' style={{ gap: "1rem" }}>

          <img src={`${avatarPath}`}
            style={{
              height: "80px",
              width: "80px",
              borderRadius: '50%',
              border: "1px solid"
            }}></img>

          <h3>{sub.data.name}</h3>

          <SubSubscribe darkMode={darkMode} sub={sub} user={user} />

        </div>

        {
          sub.data.creator === user.id ?
            <SubSettingsShortcut darkMode={darkMode} sub={sub} /> : null
        }

      </div>
    </div>
  )
}
