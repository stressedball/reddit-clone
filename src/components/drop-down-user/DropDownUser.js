import signOutUser from './signOutUser'
import { GlobalContext } from '../providers/GlobalProvider'
import React, { useState, useContext, useEffect } from 'react'
import Theme from './Theme'
import { Tile } from '../../sc-css/atomic'
import { DropDownContainerStyled, DropDownHeaderStyled, DropDownDisplayed } from '../../sc-css/DropDownStyle'
import ProfileKnown from './profile/ProfileKnown'
import ProfileUnknown from './profile/ProfileUnknown'
import AuthenticateUser from '../log-in_sign-up/AuthenticateUser'
import { SVGStyled } from '../../sc-css/atomic'
import { ThemeContext } from '../providers/ThemeProvider.js'

export default function DropDownUser() {

    const [display, setDisplay] = useState(false)
    const { user } = useContext(GlobalContext)
    const [logInScreen, setLogInScreen] = useState(false)
    const { darkMode } = useContext(ThemeContext)

    const handleDisplay = () => {
        setDisplay(!display)
    }

    const handleLoginScreen = () => { setLogInScreen(!logInScreen) }

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

    return (

        <DropDownContainerStyled className={`${display} drop-down-user ${darkMode}`}
            style={{ width: "fit-content", padding: "0 8px" }}>

            <DropDownHeaderStyled className={`drop-down-user ${darkMode}`}>
                {
                    user ?
                        <ProfileKnown handleDisplay={handleDisplay} user={user} />
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
                                <LogOut darkMode={darkMode} user={user} />
                                :
                                <Tile className={`${darkMode} drop-down-user`} onClick={() => { setLogInScreen(true) }}>Log In</Tile>
                        }
                    </DropDownDisplayed>
                    : null
            }

            {logInScreen ? <AuthenticateUser handleLoginScreen={handleLoginScreen} /> : null}

        </DropDownContainerStyled>
    )
}

function LogOut({ darkMode, user }) {

    return (
        <Tile className={`${darkMode} drop-down-user`} onClick={() => { signOutUser(user) }}>
            <SVGStyled
                className={`${darkMode} drop-down-user`}
                viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path style={{ fill: "inherit", stroke: "inherit" }} d="M15 4H18C19.1046 4 20 4.89543 20 6V18C20 19.1046 19.1046 20 18 20H15M8 8L4 12M4 12L8 16M4 12L16 12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </SVGStyled>
            Log Out
        </Tile>
    )
}