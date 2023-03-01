import '../../../css/dropdown.css'
import signOutUser from './signOutUser'
import { GlobalContext } from '../../providers/GlobalProvider'
import React, { useState, useContext, useEffect } from 'react'
import UserAvatar from '../../reusables/UserAvatar'
import Theme from './Theme'

export default function DropDownUser({ darkMode }) {

    const [isDisplay, setIsDisplay] = useState(false)
    const { user } = useContext(GlobalContext)
    const [borderRadius, setBorderRadius] = useState('round')

    useEffect(() => {
        
        isDisplay ? setBorderRadius('square') : setBorderRadius('round')

        function toggleDisplay(e) {
            if (isDisplay) {
                if(!e.target.classList.contains('drop-down-user')) setIsDisplay(false)
            }
        }

        window.addEventListener('click', toggleDisplay)

        return () => window.removeEventListener('click', toggleDisplay)

    }, [isDisplay])

    return (

        <div id='dropdown-container' className={`${darkMode} drop-down-user ${borderRadius}`}>

            <div
                id='dropdown-header' className='drop-down-user'
            >
                {
                    user ?
                        <div
                            id='avatar-container'
                            className={`${darkMode} horizontal tile flex mouse-pointer drop-down-user`}
                            onClick={() => {
                                setIsDisplay(!isDisplay)
                            }}
                        >

                            <p style={{ padding: '0', margin: "0" }}
                                className='drop-down-user'
                            >Welcome <strong>{user.data.userName}</strong></p>

                            <UserAvatar user={user} />

                        </div>
                        : null
                }
            </div>
            {
                isDisplay ?

                    <div className={`${darkMode} displayed drop-down-user`}>

                        <Theme />

                        <div
                            className={`${darkMode} tile mouse-pointer drop-down-user`}
                            onClick={() => { signOutUser(user) }}
                        >Log Out</div>

                    </div>
                    : null
            }
        </div>
    )
}

