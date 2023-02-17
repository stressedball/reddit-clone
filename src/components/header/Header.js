import '../../css/header.css'
import React from 'react'
import DropDown from './DropDown'
import DropDownUser from './DropDownUser'
import SearchBar from './SearchBar'

export default function Header({ userName }) {
    return (
        <nav>
            <h3>RedditClone</h3>
            <DropDown />
            <SearchBar />
            <DropDownUser
                userName={userName}
            />
        </nav>
    )
}
