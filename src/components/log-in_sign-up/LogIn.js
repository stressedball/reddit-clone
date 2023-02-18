import React, { useEffect, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/getAuthDb'
import { useRef } from 'react'
import '../../css/log-in_sign-up.css'

export default function LogIn() {

    const email = useRef()
    const password = useRef()
    const [error, setError] = useState()

    const handleLogIn = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .catch(() => {
                setError('Failed to login')
            });
    }

    useEffect(() => { }, [error])

    return (
        <div
            id='container'
        >

            <form
                id='log-in'
            >

                {
                    error
                        ?
                        <p
                            id='error'
                        >{error}</p>
                        :
                        null
                }

                <p>Welcome To RedditClone</p>

                <input
                    type="email"
                    placeholder='email'
                    ref={email}
                    required={true}
                ></input>

                <input
                    type="password"
                    ref={password}
                    placeholder='password'
                    required={true}
                ></input>

                <button
                    onClick={handleLogIn}
                >Log in</button>

                <div
                    id='sign-up'
                >
                    <p>New to RedditClone?</p>
                    <a href='/sign-up'>Create an account</a>
                </div>

            </form>
        </div>
    )
}
