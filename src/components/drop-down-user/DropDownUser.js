// import '../../../css/dropdown.css'
import signOutUser from './signOutUser'
import { GlobalContext } from '../providers/GlobalProvider'
import React, { useState, useContext, useEffect } from 'react'
import Theme from './Theme'
import { DropDownContainerStyled, DropDownHeaderStyled, DropDownDisplayed } from '../header/DropDownStyle'
import ProfileKnown from './profile/ProfileKnown'
import ProfileUnknown from './profile/ProfileUnknown'

export default function DropDownUser({ darkMode }) {

    const [display, setDisplay] = useState(false)
    const { user } = useContext(GlobalContext)

    useEffect(() => {

        function toggleDisplay(e) {
            if (display) {
                if (!e.target.classList.contains('drop-down-user')) setDisplay(false)
            }
        }

        window.addEventListener('click', toggleDisplay)

        return () => window.removeEventListener('click', toggleDisplay)

    }, [display])

    const handleDisplay = () => { setDisplay(!display) }

    return (

        <DropDownContainerStyled className={`${display} drop-down-user ${darkMode}`}>

            <DropDownHeaderStyled className={`drop-down-user ${darkMode}`}
            >
                {
                    user ?
                        <ProfileKnown darkMode={darkMode} handleDisplay={handleDisplay} user={user} />
                        :
                        <ProfileUnknown darkMode={darkMode} handleDisplay={handleDisplay} />
                }

            </DropDownHeaderStyled>
            {
                display ?

                    <DropDownDisplayed className={`${darkMode} drop-down-user`}>

                        <Theme />

                        <div
                            className={`${darkMode} tile mouse-pointer drop-down-user`}
                            onClick={() => { signOutUser(user) }}
                        >Log In</div>

                    </DropDownDisplayed>
                    : null
            }
        </DropDownContainerStyled>
    )
}

