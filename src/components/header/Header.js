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
    gap: 1rem;
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

export default function Header({ userId }) {

    const [userName, setUserName] = useState()
    const { darkMode } = useContext(ThemeContext)
    const navigate = useNavigate()
    const { user } = useContext(GlobalContext)
    const [userAuthenticate, setUserAuthenticate] = useState(false)

    useEffect(() => {
        if (user) {
            setUserName(user.userName)
            setUserAuthenticate(false)
        }
    }, [user])

    return (
        <HeaderStyled className={`${darkMode}`}>

            <StyledDiv>
                <H3 onClick={() => navigate('/')}
                >RedditClone</H3>

                {user ? <DropDown darkMode={darkMode} /> : null}

                <SearchBar darkMode={darkMode} />
            </StyledDiv>

            <StyledDiv>
                {user ? null : <BlueButton onClick={() => setUserAuthenticate(true)}>Log In</BlueButton>}

                <DropDownUser userName={userName} darkMode={darkMode} />
            </StyledDiv>

            {userAuthenticate ? <AuthenticateUser /> : null}
            
        </HeaderStyled>
    )
}
