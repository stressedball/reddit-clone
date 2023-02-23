import React from "react";
import { useNavigate } from 'react-router-dom'

export default function ImageShortcut({ darkMode }) {

    const navigate = useNavigate()

    return (
        <svg
            className={`${darkMode} mouse-pointer`}
            onClick={() => navigate('submit/img')}
            width="30px" height="30px" fill="none"
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
    )
}

