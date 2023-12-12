import signOutUser from './signOutUser';
import {GlobalContext} from '../providers/GlobalProvider';
import React, {useState, useContext, useEffect} from 'react';
import Theme from './Theme';
import {Tile} from '../../sc-css/atomic';
import {DropDownContainerStyled, DropDownHeaderStyled, DropDownDisplayed} from '../../sc-css/DropDownStyle';
import ProfileKnown from './profile/ProfileKnown';
import ProfileUnknown from './profile/ProfileUnknown';
import AuthenticateUser from '../log-in_sign-up/AuthenticateUser';
import {SVGStyled} from '../../sc-css/atomic';
import {ThemeContext} from '../providers/ThemeProvider.js';
import {useNavigate} from 'react-router-dom';

export default function DropDownUser() {
    const [display, setDisplay] = useState(false);
    const {user} = useContext(GlobalContext);
    const [logInScreen, setLogInScreen] = useState(false);
    const {darkMode} = useContext(ThemeContext);
    const [isDropdownMenu, setIsDropdownMenu] = useState('not-drop');

    const handleDisplay = () => {
        setDisplay(!display);
    };

    const handleLoginScreen = () => {
        setLogInScreen(!logInScreen);
    };

    useEffect(() => {
        if (display) setIsDropdownMenu('not-drop')
        else setIsDropdownMenu('')

        function toggleDisplay(e) {
            if (display) {
                if (!e.target.classList.contains('drop-down-user')) setDisplay(false);
            }
        }
        window.addEventListener('click', toggleDisplay);
        return () => window.removeEventListener('click', toggleDisplay);
    }, [display]);

    return (
        <DropDownContainerStyled className={`${display} drop-down-user ${darkMode} ${isDropdownMenu}`}>
            <DropDownHeaderStyled className={`drop-down-user ${darkMode}`}>
                {user ? (
                    <ProfileKnown darkMode={darkMode} handleDisplay={handleDisplay} user={user} />
                ) : (
                    <ProfileUnknown darkMode={darkMode} handleDisplay={handleDisplay} />
                )}
            </DropDownHeaderStyled>

            {display ? (
                <DropDownDisplayed className={`${darkMode} drop-down-user`}>
                    <Theme />
                    {user ? (
                        <LogOut darkMode={darkMode} user={user} />
                    ) : (
                        <LogIn darkMode={darkMode} handleLoginScreen={handleLoginScreen} />
                    )}
                </DropDownDisplayed>
            ) : null}

            {logInScreen ? <AuthenticateUser darkMode={darkMode} handleLoginScreen={handleLoginScreen} /> : null}
        </DropDownContainerStyled>
    );
}

function LogOut({darkMode, user}) {
    const navigate = useNavigate();
    const redirectToHome = () => navigate('reddit-clone/');

    return (
        <Tile
            className={`${darkMode} drop-down-user`}
            onClick={() => {
                signOutUser(user, redirectToHome);
            }}
        >
            <span>Log Out</span>
            <SVGStyled className={`${darkMode} drop-down-user`} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path
                    style={{stroke: 'none'}}
                    d='M12 3c-4.963 0-9 4.037-9 9v.001l5-4v3h7v2H8v3l-5-4C3.001 16.964 7.037 21 12 21s9-4.037 9-9-4.037-9-9-9z'
                />
            </SVGStyled>
        </Tile>
    );
}

function LogIn({darkMode, handleLoginScreen}) {
    return (
        <Tile
            className={`${darkMode} drop-down-user`}
            onClick={() => {
                handleLoginScreen();
            }}
        >
            <span>Log In</span>
            <SVGStyled className={darkMode} viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path
                    style={{stroke: 'none'}}
                    d='M12 3c-4.625 0-8.442 3.507-8.941 8.001H10v-3l5 4-5 4v-3H3.06C3.56 17.494 7.376 21 12 21c4.963 0 9-4.037 9-9s-4.037-9-9-9z'
                />
            </SVGStyled>
        </Tile>
    );
}
