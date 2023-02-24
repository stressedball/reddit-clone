import '../../../css/dropdown.css'
import signOutUser from './signOutUser'
import { GlobalContext } from '../../providers/GlobalProvider'
import React, { useState, useContext } from 'react'
import UserAvatar from '../../reusables/UserAvatar'
import Theme from './Theme'

export default function DropDownUser({ darkMode }) {

    const [isDisplay, setIsDisplay] = useState(false)
    const { user } = useContext(GlobalContext)
    const [styleBorder, setStyleBorder] = useState('')

    return (

        <div id='dropdown-container' className={`${styleBorder} ${darkMode}`}>

            <div
                id='dropdown-header'
            >
                {
                    user ?
                        <div
                            id='avatar-container'
                            className={`${darkMode} horizontal tile flex mouse-pointer`}
                            onClick={() => {
                                setIsDisplay(!isDisplay)
                                styleBorder === '' ? setStyleBorder('bottom-border') : setStyleBorder('')
                            }}
                        >

                            <p style={{ padding: '0', margin: "0" }}>Welcome <strong>{user.data.userName}</strong></p>
                            <UserAvatar user={user} />

                        </div>
                        : null
                }
            </div>
            {
                isDisplay ?

                    <div className={`${darkMode} displayed`}>

                        <Theme />

                        <div
                            className={`${darkMode} tile mouse-pointer`}
                            onClick={() => { signOutUser(user) }}
                        >Log Out</div>

                    </div>
                    : null
            }
        </div>
    )
}

