import React, { useState, useContext } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/getAuthDb'
import { GlobalContext } from '../providers/GlobalProvider'
import '../../css/header.css'

export default function DropDownUser() {

    const [isDisplay, setIsDisplay] = useState(false)
    const { userName } = useContext(GlobalContext)

    return (
        <div
            id='dropdown-user'
        >
            <button
                id='dropdown-button'
                onClick={() => setIsDisplay(!isDisplay)}
            >
                <p>Welcome <strong>{userName}</strong></p>

                <img src={`https://api.dicebear.com/5.x/initials/svg?seed=${userName}`}
                    style={{
                        height: "30px",
                        borderRadius: '50%'
                    }}
                // onClick={navigate to user page}
                ></img>

            </button>

            {
                isDisplay
                    ?
            
                    <div
                        className='displayed'
                    >
            
                        <p>More to come</p>
                        <p>About</p>
            
                        <button
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
