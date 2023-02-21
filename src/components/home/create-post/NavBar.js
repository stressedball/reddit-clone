import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavBar() {

    const navigate = useNavigate()

    return (
        <div
            id='create-shortcut-navbar'
        >
            <div
                className='navbar-option'
                onClick={() => navigate('/submit')}
            >Text</div>
            <div
                className='navbar-option'
                onClick={() => navigate('/submit/img')}
            >Image</div>
            <div
                className='navbar-option'
                onClick={() => navigate('/submit/poll')}
            >Poll</div>
        </div>
    )
}
