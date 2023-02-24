import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PollShortcut({ darkMode }) {

    const navigate = useNavigate()

    return (
        <svg
            className={`${darkMode} mouse-pointer`}
            onClick={() => navigate('submit/poll')}
            width="30px" height="30px" fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 4H5C4.44771 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44771 19.5523 4 19 4ZM5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5Z"
            />
            <path fill="currentColor"
                d="M11 7H13V17H11V7Z" />
            <path fill="currentColor"
                d="M15 13H17V17H15V13Z" />
            <path fill="currentColor"
                d="M7 10H9V17H7V10Z" />
        </svg>
    )
}