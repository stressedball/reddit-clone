import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/create-post-shortcut.css'
import { GlobalContext } from '../providers/GlobalProvider'

export default function CreatePostShortcut() {

    const { user } = useContext(GlobalContext)
    const navigate = useNavigate()

    return (
        <div
            id='create-post-shortcut'
        >
            <div>
                {
                    user ?
                        <img src={`https://api.dicebear.com/5.x/initials/svg?seed=${user.data.userName}`}
                            style={{
                                height: "30px",
                                borderRadius: '50%'
                            }}
                        // onClick={navigate to user page}
                        ></img>
                        :
                        null
                }

            </div>

            <input
                onClick={() => navigate('submit')}
                placeholder="Create a post"
            ></input>

            <ImageShortcut />

            <PollShortcut />

        </div>
    )
}

function ImageShortcut() {

    const navigate = useNavigate()

    return (
        <svg
            onClick={() => navigate('submit/img')}
            width="30px" height="30px" fill="none"
            viewBox="-0.5 0 25 25" xmlns="http://www.w3.org/2000/svg">
            <path
                stroke="#0F0F0F"
                d="M21 22H3C2.72 22 2.5 21.6517 2.5 21.2083V3.79167C2.5 3.34833 2.72 3 3 3H21C21.28 3 21.5 3.34833 21.5 3.79167V21.2083C21.5 21.6517 21.28 22 21 22Z" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path
                stroke="#0F0F0F"
                d="M4.5 19.1875L9.66 12.6875C9.86 12.4375 10.24 12.4375 10.44 12.6875L15.6 19.1875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path
                stroke="#0F0F0F"
                d="M16.2 16.6975L16.4599 16.3275C16.6599 16.0775 17.0399 16.0775 17.2399 16.3275L19.4999 19.1875" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <path
                stroke="#0F0F0F"
                d="M17.2046 9.54315C17.2046 10.4294 16.4862 11.1478 15.6 11.1478C14.7138 11.1478 13.9954 10.4294 13.9954 9.54315C13.9954 8.65695 14.7138 7.93854 15.6 7.93854C16.4862 7.93854 17.2046 8.65695 17.2046 9.54315Z" />
        </svg>
    )
}

function PollShortcut() {

    const navigate = useNavigate()

    return (
        <svg
            onClick={() => navigate('submit/poll')}
            width="30px" height="30px" fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill="#000000"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 4H5C4.44771 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V5C20 4.44771 19.5523 4 19 4ZM5 2C3.34315 2 2 3.34315 2 5V19C2 20.6569 3.34315 22 5 22H19C20.6569 22 22 20.6569 22 19V5C22 3.34315 20.6569 2 19 2H5Z"
            />
            <path fill="#000000"
                d="M11 7H13V17H11V7Z" />
            <path fill="#000000"
                d="M15 13H17V17H15V13Z" />
            <path fill="#000000"
                d="M7 10H9V17H7V10Z" />
        </svg>
    )
}