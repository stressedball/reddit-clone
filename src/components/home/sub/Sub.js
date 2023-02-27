import '../../../css/sub.css'
import { GlobalContext } from '../../providers/GlobalProvider'
import PostPreview from '../../post-preview/PostPreview'
import SubSettingsShortcut from './SubSettingsShortcut'
import SubSubscribe from './SubSubscribe'
import { getAvatar } from '../sub-settings.js/avatar-settings/avatarData'
import { getBanner } from '../sub-settings.js/banner-settings/bannerData'

import { useParams } from 'react-router-dom'
import React, { useState, useContext, useEffect } from 'react'

export default function Sub({ darkMode }) {

    const subId = useParams().subId
    const { subs, posts, user } = useContext(GlobalContext)
    const [avatarPath, setAvatarPath] = useState(null)
    const [bannerPath, setBannerPath] = useState(null)

    useEffect(() => {

        if (subs === undefined) return

        const sub = subs.filter(sub => sub.id === subId)[0]

        if (sub.data.avatar) {
            getAvatar(sub).then(path => {
                setAvatarPath(path)
            })
        } else { setAvatarPath(null) }

        if (sub.data.banner) {
            getBanner(sub).then(path => {
                setBannerPath(path)
            })
        } else { setBannerPath(null) }

    }, [subId])

    const subPosts = posts.filter(post => post.data.parent === subId)
    if (subPosts.length === 0) return <div>Be the first to post!</div>

    const sub = subs.filter(sub => sub.id === subId)[0]

    return (
        <>
            <img src={`${bannerPath}`}
                style={{
                    height: "250px", width: "100vw",
                }}></img>
            
            <header id='sub-settings-shortcut' className='horizontal flex'>


                <div>sub banner</div>
                <div>sub logo / sub name / joined / notifications</div>
                <div className='horizontal flex' style={{ gap: "1rem" }}>

                    <img src={`${avatarPath}`}
                        style={{
                            height: "35px",
                            width: "35px",
                            borderRadius: '50%',
                            border: "1px solid"
                        }}></img>

                    <h3>{sub.data.name}</h3>

                    {
                        sub.data.creator === user.id ?
                            <SubSettingsShortcut darkMode={darkMode} /> : null
                    }
                </div>

                <SubSubscribe darkMode={darkMode} sub={sub} user={user} />

            </header>

            {
                subPosts.length === 0 ?
                    <section>
                        <p>Swoooosh...</p>
                        <p>This sub is pretty empty.</p>
                        <p>Be the first to post!</p>
                    </section>
                    :
                    subPosts.map(post => {
                        return <PostPreview key={post.id} subId={null} post={post} darkMode={darkMode} />
                    })
            }
        </>
    )

}







