import React, { useContext, useEffect, useState } from 'react'
import DropDown from './DropDown'
import DropDownUser from '../drop-down-user/DropDownUser'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../providers/ThemeProvider'
import styled from 'styled-components'
import { BlueButton, HorizontalFlex } from '../../sc-css/atomic'
import { darkDefaultBorder, darkSecondary, lightBackgroundColor, lightDefaultBorder } from '../../sc-css/COLORS'
import { GlobalContext } from '../providers/GlobalProvider'
import AuthenticateUser from '../log-in_sign-up/AuthenticateUser'

const HeaderStyled = styled.header`
    display: grid;
    align-content: center;
    border-bottom: 1px solid ${lightDefaultBorder};
    background-color: ${lightBackgroundColor};
    grid-area: 1/1/1/3;
    padding:0 20px;
    gap: 12px;
    width:100%; 
    grid-template-columns: 25% 50% 25%;

    &.dark {
        background-color: ${darkSecondary};
        border-bottom: 1px solid ${darkDefaultBorder};
    }
`
const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    gap:4px;
    grid-column: 3;
`

const H3 = styled.h3`
    margin-right: 12px;

    &:hover {
        cursor:pointer;
    }
`

export default function Header({ dropdownMenu, handleMenuDisplay }) {

    const { darkMode } = useContext(ThemeContext)
    const navigate = useNavigate()
    const { user } = useContext(GlobalContext)
    const [userAuthenticate, setUserAuthenticate] = useState(false)

    useEffect(() => {
        if (user) { setUserAuthenticate(false) }
    }, [user])

    const handleLoginScreen = () => { setUserAuthenticate(!userAuthenticate) }

    return (
        <HeaderStyled className={`${darkMode}`}>

            <HorizontalFlex style={{ gridColumn: "1" }}>
                <H3 onClick={() => navigate('/')}
                >RedditClone</H3>

                {user ? <DropDown darkMode={darkMode} dropdownMenu={dropdownMenu} handleMenuDisplay={handleMenuDisplay} /> : null}
            </HorizontalFlex>


            <SearchBar darkMode={darkMode} />

            <StyledDiv>
                {user ? null : <BlueButton onClick={() => setUserAuthenticate(true)}>Log In</BlueButton>}

                <DropDownUser />
            </StyledDiv>

            {userAuthenticate ? <AuthenticateUser handleLoginScreen={handleLoginScreen} /> : null}

        </HeaderStyled>
    )
}
