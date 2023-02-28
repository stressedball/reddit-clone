import '../../css/header.css'
import React, { useContext } from 'react'
import DropDown from './drop-down-header/DropDown'
import DropDownUser from './drop-down-user/DropDownUser'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../providers/ThemeProvider'

export default function Header({ userName }) {

    const { darkMode } = useContext(ThemeContext)
    const navigate = useNavigate()

    return (

        <header>

            <h3
                className='mouse-pointer'
                onClick={() => navigate('/')}
            >RedditClone</h3>

            <DropDown
                darkMode={darkMode}
            />

            <SearchBar
                darkMode={darkMode}

            />

            <DropDownUser
                userName={userName}
                darkMode={darkMode}

            />

        </header>
    )
}
