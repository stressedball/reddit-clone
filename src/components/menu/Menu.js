import { useNavigate } from "react-router-dom"
import { useState, useContext, useRef, useEffect } from "react"
import styled from "styled-components"
import Users from "./Users"
import Subs from "./Subs"
import { CreatePostTile, HomeMenuTile } from "../multi-usage/SpecialMenuOptions"
import { GlobalContext } from "../providers/GlobalProvider"
import { ThemeContext } from "../providers/ThemeProvider"
import { Tile, SVGStyled } from "../../sc-css/atomic"
import { darkThree, lightBorder, lightText } from "../../sc-css/COLORS"

const StyledInput = styled.input`
    height:30px;
    outline:none;
    margin-left: 24px;
    border: 1px solid transparent;
    background-color: #f6f7f8;
    margin-top:4px;
    
    &:hover {
        border : 1px solid #0079d3;
    }

    &:focus {
        border : 1px solid #0079d3;
        background-color: inherit;
    }

    &.dark{
        background-color: ${darkThree};
        color:${lightText};
    }

    &.dark:focus, &.dark:hover {
        border : 1px solid ${lightBorder};
    }
`

export default function Menu({ dropdownMenu, handleMenuDisplay }) {

    const navigate = useNavigate()
    const { subs, users } = useContext(GlobalContext)
    const { darkMode } = useContext(ThemeContext)
    const [inputValue, setInputValue] = useState('')
    const [filteredSubs, setFilteredSubs] = useState()
    const [filteredUsers, setFilteredUsers] = useState()

    const handleFilterSearch = (e) => {
        setInputValue(e.target.value)
        setFilteredSubs(subsFilterFunction(e.target.value, subs))
        setFilteredUsers(usersFilterFunction(e.target.value, users))
    }

    return (
        <div>
            {/* Either close menu or pin menu svg */}
            <div style={{ display: "flex", justifyContent: "end", alignItems: "center" }}  >
                {dropdownMenu ?
                    // pin off
                    <SVGStyled
                        onClick={() => handleMenuDisplay()}
                        width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.28034 2.21968C2.98745 1.92678 2.51257 1.92677 2.21968 2.21966C1.92678 2.51255 1.92677 2.98743 2.21966 3.28032L8.34462 9.4054L5.47194 10.5535L5.37685 10.5992C4.95639 10.8384 4.86452 11.425 5.22008 11.7804L8.42497 14.9832L3.47201 19.9449L3.46997 21L4.53489 21.0033L9.48597 16.0442L12.7237 19.2804L12.8033 19.3497C13.1888 19.6418 13.7641 19.4949 13.9505 19.0281L15.0966 16.1575L20.7194 21.7805C21.0123 22.0734 21.4872 22.0734 21.7801 21.7805C22.073 21.4876 22.073 21.0127 21.7801 20.7198L3.28034 2.21968Z" fill="currentColor" />
                        <path d="M20.9736 11.3433L16.87 13.6882L10.7836 7.60169L13.1069 3.24539C13.2229 3.02787 13.3739 2.83089 13.5538 2.66233C14.4174 1.85315 15.75 1.85664 16.6089 2.64212L16.7341 2.76581L21.4991 7.85136C21.6191 7.97942 21.7237 8.12109 21.8108 8.27346C22.4005 9.30546 22.0832 10.6078 21.1103 11.2587L20.9736 11.3433Z" fill="currentColor" />
                    </SVGStyled>
                    :
                    // close button
                    <SVGStyled style={{ width: "32px", height: "32px" }}
                        onClick={() => handleMenuDisplay()}
                        viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g id="icomoon-ignore"></g>
                        <path d="M10.722 9.969l-0.754 0.754 5.278 5.278-5.253 5.253 0.754 0.754 5.253-5.253 5.253 5.253 0.754-0.754-5.253-5.253 5.278-5.278-0.754-0.754-5.278 5.278z" fill="currentColor"></path>
                    </SVGStyled>}
            </div>

            {/* Create post */}
            <Tile className={`${darkMode}`} onClick={() => { navigate('/submit') }}>
                <CreatePostTile />
                <p style={{ margin: '0', marginLeft: "8px" }}>Create Post</p>
            </Tile>

            <StyledInput onChange={(e) => handleFilterSearch(e)} type='text' id="input" value={inputValue} className={`${darkMode}  drop-down-menu`} placeholder={'Filter'} onClick={(e) => e.stopPropagation()} />

            {
                inputValue === '' ?
                    <>
                        <Subs darkMode={darkMode} subs={subs} />
                        <Users darkMode={darkMode} users={users} />
                    </>
                    :
                    <>
                        {filteredSubs.length > 0 ? <Subs darkMode={darkMode} subs={filteredSubs} /> : null}
                        {filteredUsers.length > 0 ? <Users darkMode={darkMode} users={filteredUsers} /> : null}
                    </>
            }

            {/* Home */}
            <Tile className={`${darkMode}`} onClick={() => { navigate('/') }}>
                <HomeMenuTile />
                <p style={{ margin: "0", marginLeft: "8px" }}>Home</p>
            </Tile>
        </div>
    )
}


function subsFilterFunction(string, subs) {
    if (subs === undefined) return
    return subs.filter(sub => sub.data.name.toLowerCase().includes(string.toLowerCase()))
}

function usersFilterFunction(string, users) {
    if (users === undefined) return
    return users.filter(user => user.data.userName.toLowerCase().includes(string.toLowerCase()))
}