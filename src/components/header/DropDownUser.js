import React, { useState, useContext } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase/getAuthDb'
import { GlobalContext } from '../providers/GlobalProvider'

export default function DropDownUser() {

    const [isDisplay, setIsDisplay] = useState(false)
    const {userName} = useContext(GlobalContext)
    
    return (
        <div
            id='dropdown-user'
        >
            <button
                onClick={() => setIsDisplay(!isDisplay)}
            >
                Welcome {userName}
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
