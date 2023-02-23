import '../../../css/dropdown-user.css'
import { signOut } from 'firebase/auth'
import { auth } from '../../../firebase/getAuthDb'
import { GlobalContext } from '../../providers/GlobalProvider'
import { ThemeContext } from '../../providers/ThemeProvider'
import React, { useState, useContext } from 'react'

export default function DropDownUser({ darkMode }) {

    const [isDisplay, setIsDisplay] = useState(false)
    const { user } = useContext(GlobalContext)

    return (
        <div
            id='dropdown-user'
        >
            <button
                id='dropdown-button'
                className={`${darkMode} buttonStyle mouse-pointer`}
                onClick={() => setIsDisplay(!isDisplay)}
            >

                {
                    user ?
                        <>
                            <p>Welcome <strong>{user.data.userName}</strong></p>
                            <img
                                src={`https://api.dicebear.com/5.x/initials/svg?seed=${user.data.userName}`}
                                style={{
                                    height: "30px",
                                    borderRadius: '50%'
                                }}
                            // onClick={navigate to user page}
                            ></img>
                        </>
                        : null
                }
            </button>

            {
                isDisplay
                    ?

                    <div
                        className='displayed'
                    >

                        <Theme />

                        <button
                            className={`${darkMode} buttonStyle mouse-pointer`}
                            onClick={() => {
                                signOut(auth)
                            }}
                        >Log Out</button>

                    </div>
                    :
                    null
            }
        </div>
    )
}

function Theme() {

    const { darkMode, toggleDarkMode } = useContext(ThemeContext)

    const handleTheme = () => {
        toggleDarkMode()
    }

    return (
        <button
            className={`${darkMode} buttonStyle mouse-pointer`}
            onClick={handleTheme}
        >Switch to <span>
                {
                    darkMode === 'dark' ?
                        'light' : 'dark'
                }
            </span> mode</button>
    )
}