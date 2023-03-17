// import '../../../css/dropdown.css'
import signOutUser from './signOutUser'
import { GlobalContext } from '../providers/GlobalProvider'
import React, { useState, useContext, useEffect } from 'react'
import Theme from './Theme'
import { DropDownContainerStyled, DropDownHeaderStyled, DropDownDisplayed, Tile } from '../../sc-css/DropDownStyle'
import ProfileKnown from './profile/ProfileKnown'
import ProfileUnknown from './profile/ProfileUnknown'
import AuthenticateUser from '../log-in_sign-up/AuthenticateUser'

export default function DropDownUser({ darkMode }) {

    const [display, setDisplay] = useState(false)
    const { user } = useContext(GlobalContext)
    const [logInScreen, setLogInScreen] = useState(false)

    useEffect(() => {

        function toggleDisplay(e) {
            if (display) {
                if (!e.target.classList.contains('drop-down-user')) setDisplay(false)
            }
        }

        window.addEventListener('click', toggleDisplay)

        return () => window.removeEventListener('click', toggleDisplay)

    }, [display])

    useEffect(() => { }, [user, logInScreen])
    
    const handleDisplay = () => { setDisplay(!display) }
    const handleLoginScreen = () => { setLogInScreen(!logInScreen) }

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

                        {
                            user ?
                                <Tile className={`${darkMode} drop-down-user`} onClick={() => { signOutUser(user) }}>Log Out</Tile>
                                :
                                <Tile className={`${darkMode} drop-down-user`} onClick={() => { setLogInScreen(true) }}>Log In</Tile>
                        }

                    </DropDownDisplayed>
                    : null
            }

            {
                logInScreen ? <AuthenticateUser handleLoginScreen={handleLoginScreen} /> : null
            }

        </DropDownContainerStyled>
    )
}

