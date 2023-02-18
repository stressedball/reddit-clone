import '../../css/header.css'
import React from 'react'
import DropDown from './DropDown'
import DropDownUser from './DropDownUser'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom'

export default function Header({ userName }) {
    
    const navigate = useNavigate()

    return (

        <nav>
        
            <h3
                onClick={() => navigate('/')}
            >RedditClone</h3>
        
            <DropDown />
        
            <SearchBar />
        
            <DropDownUser
                userName={userName}
            />
        
        </nav>
    )
}
