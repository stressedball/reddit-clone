import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function NavBar({ darkMode }) {

    const navigate = useNavigate()

    return (
        <div
            id='create-shortcut-navbar'
        >
            {/* text */}
            <svg
                className={`${darkMode} mouse-pointer`}
                onClick={() => navigate('/submit')}
                width="50px" height="50px" fill="none"
                viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M4.5 6.99542H4V7.99542H4.5V6.99542ZM10.5 7.99542H11V6.99542H10.5V7.99542ZM4.5 10H4V11H4.5V10ZM10.5 11H11V10H10.5V11ZM4.5 3.99738H4V4.99738H4.5V3.99738ZM10.5 4.99738H11V3.99738H10.5V4.99738ZM13.5 3.5H14V3.29289L13.8536 3.14645L13.5 3.5ZM10.5 0.5L10.8536 0.146447L10.7071 0H10.5V0.5ZM4.5 7.99542H10.5V6.99542H4.5V7.99542ZM4.5 11H10.5V10H4.5V11ZM4.5 4.99738H10.5V3.99738H4.5V4.99738ZM12.5 14H2.5V15H12.5V14ZM2 13.5V1.5H1V13.5H2ZM13 3.5V13.5H14V3.5H13ZM2.5 1H10.5V0H2.5V1ZM10.1464 0.853553L13.1464 3.85355L13.8536 3.14645L10.8536 0.146447L10.1464 0.853553ZM2.5 14C2.22386 14 2 13.7761 2 13.5H1C1 14.3284 1.67157 15 2.5 15V14ZM12.5 15C13.3284 15 14 14.3284 14 13.5H13C13 13.7761 12.7761 14 12.5 14V15ZM2 1.5C2 1.22386 2.22386 1 2.5 1V0C1.67157 0 1 0.671574 1 1.5H2Z" />
            </svg>

            {/* image */}
            <svg
                className={`${darkMode} mouse-pointer`}
                onClick={() => navigate('/submit/img')}
                width="50px" height="50px" fill="none"
                viewBox="-0.5 0 25 25" xmlns="http://www.w3.org/2000/svg">
                <path
                    stroke="currentColor"
                    d="M21 22H3C2.72 22 2.5 21.6517 2.5 21.2083V3.79167C2.5 3.34833 2.72 3 3 3H21C21.28 3 21.5 3.34833 21.5 3.79167V21.2083C21.5 21.6517 21.28 22 21 22Z" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    stroke="currentColor"
                    d="M4.5 19.1875L9.66 12.6875C9.86 12.4375 10.24 12.4375 10.44 12.6875L15.6 19.1875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    stroke="currentColor"
                    d="M16.2 16.6975L16.4599 16.3275C16.6599 16.0775 17.0399 16.0775 17.2399 16.3275L19.4999 19.1875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                <path
                    stroke="currentColor"
                    d="M17.2046 9.54315C17.2046 10.4294 16.4862 11.1478 15.6 11.1478C14.7138 11.1478 13.9954 10.4294 13.9954 9.54315C13.9954 8.65695 14.7138 7.93854 15.6 7.93854C16.4862 7.93854 17.2046 8.65695 17.2046 9.54315Z" />
            </svg>

            {/* poll */}
            <svg
                className={`${darkMode} mouse-pointer`}
                onClick={() => navigate('/submit/poll')}
                width="50px" height="50px" fill="none"
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
        </div>
    )
}