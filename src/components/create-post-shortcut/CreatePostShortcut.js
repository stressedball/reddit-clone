import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/create-post-shortcut.css'
import { GlobalContext } from '../providers/GlobalProvider'
import { ThemeContext } from '../providers/ThemeProvider'
import PollShortcut from './PollShortcut'
import ImageShortcut from './ImageShortcut'
import UserAvatar from '../multi-usage/UserAvatar'

export default function CreatePostShortcut() {

    const { darkMode } = useContext(ThemeContext)
    const { user } = useContext(GlobalContext)
    const navigate = useNavigate()

    return (
        <div
            id='create-post-shortcut'
        >

            <UserAvatar user={user} />

            <input
                className={`${darkMode} mouse-pointer`}
                onClick={() => navigate('submit')}
                placeholder="Create a post"
            ></input>

            <ImageShortcut darkMode={darkMode} />

            <PollShortcut darkMode={darkMode} />

        </div>
    )
}


