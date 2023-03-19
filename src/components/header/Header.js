import React, { useContext, useEffect, useState } from 'react'
import DropDown from './DropDown'
import DropDownUser from '../drop-down-user/DropDownUser'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../providers/ThemeProvider'
import styled from 'styled-components'
import { BlueButton } from '../../sc-css/atomic'
import { lightBackgroundColor } from '../../sc-css/COLORS'
import { GlobalContext } from '../providers/GlobalProvider'
import AuthenticateUser from '../log-in_sign-up/AuthenticateUser'

const H3 = styled.h3`
    &:hover {
        cursor:pointer;
    }
`
const HeaderStyled = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid;
    background-color: ${lightBackgroundColor};
    grid-area: 1/1/1/3;
    
    &.dark {
        background-color: #1a1a1b;
    }
`
const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    gap:4px;
`

export default function Header({ dropdownMenu, handleMenuDisplay }) {

    // const [userName, setUserName] = useState()
    const { darkMode } = useContext(ThemeContext)
    const navigate = useNavigate()
    const { user } = useContext(GlobalContext)
    const [userAuthenticate, setUserAuthenticate] = useState(false)

    useEffect(() => {
        if (user) {
            setUserAuthenticate(false)
        }
    }, [user])

    const handleLoginScreen = () => { setUserAuthenticate(!userAuthenticate) }

    return (
        <HeaderStyled className={`${darkMode}`}>

            <H3 onClick={() => navigate('/')}
            >RedditClone</H3>

            {user ? <DropDown darkMode={darkMode} dropdownMenu={dropdownMenu} handleMenuDisplay={handleMenuDisplay} /> : null}

            <SearchBar darkMode={darkMode} />

            <StyledDiv>
                {user ? null : <BlueButton onClick={() => setUserAuthenticate(true)}>Log In</BlueButton>}

                <DropDownUser />
            </StyledDiv>

            {userAuthenticate ? <AuthenticateUser handleLoginScreen={handleLoginScreen} /> : null}

        </HeaderStyled>
    )
}
