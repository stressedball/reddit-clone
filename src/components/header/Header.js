import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { darkDefaultBorder, darkSecondary, lightBackgroundColor, lightDefaultBorder } from '../../sc-css/COLORS'
import { BlueButton, HorizontalFlex } from '../../sc-css/atomic'
import { ThemeContext } from '../providers/ThemeProvider'
import { GlobalContext } from '../providers/GlobalProvider'
import AuthenticateUser from '../log-in_sign-up/AuthenticateUser'
import DropDown from './DropDown'
import DropDownUser from '../drop-down-user/DropDownUser'
import SearchBar from './SearchBar'

export default function Header({ handleCreateSub, dropdownMenu, handleMenuDisplay }) {

    const { darkMode } = useContext(ThemeContext)
    const navigate = useNavigate()
    const { user } = useContext(GlobalContext)
    const [userAuthenticate, setUserAuthenticate] = useState(false)

    useEffect(() => { if (user) { setUserAuthenticate(false) } }, [user])

    const handleLoginScreen = () => { setUserAuthenticate(!userAuthenticate) }

    return (
        <HeaderStyled className={`${darkMode}`}>

            <HorizontalFlex>
                <H3 onClick={() => navigate('reddit-clone/')}>RedditClone</H3>

                {user ? <DropDown darkMode={darkMode} dropdownMenu={dropdownMenu} handleMenuDisplay={handleMenuDisplay} handleCreateSub={handleCreateSub} /> : null}
            </HorizontalFlex>

            <SearchBar darkMode={darkMode} handleCreateSub={handleCreateSub} />

            <StyledDiv>
                {user ? null : <BlueButton onClick={() => setUserAuthenticate(true)}>Log In</BlueButton>}

                <DropDownUser />
            </StyledDiv>

            {userAuthenticate ? <AuthenticateUser handleLoginScreen={handleLoginScreen} /> : null}

        </HeaderStyled>
    )
}

const HeaderStyled = styled.header`
    grid-area: 1/1/1/3;
    display: grid;
    grid-template-columns: auto auto auto;
    align-content: center;
    border-bottom: 1px solid ${lightDefaultBorder};
    background-color: ${lightBackgroundColor};
    padding:0 20px;
    max-width:100%; 

    &.dark {
        background-color: ${darkSecondary};
        border-bottom: 1px solid ${darkDefaultBorder};
    }
`
const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    gap:4px;
    justify-self: flex-end;
`

const H3 = styled.h3`
    margin-right: 12px;

    &:hover {
        cursor:pointer;
    }
`
