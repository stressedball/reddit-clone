import React from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/getAuthDb'
import { useRef } from 'react'

export default function LogIn() {

    const email = useRef()
    const password = useRef()

    const handleLogIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .catch((error) => {
                console.log(error)
            });
    }

    return (
        <div>
            <form>
                <input
                    placeholder='email'
                    ref={email}
                ></input>
                <input
                    ref={password}
                    placeholder='password'
                ></input>
                <button
                    onClick={handleLogIn}
                >Log in</button>
            </form>
        </div>
    )
}
