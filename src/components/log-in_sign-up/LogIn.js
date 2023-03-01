import React, { useEffect, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/getAuthDb'
import { useRef } from 'react'
import '../../css/log-in_sign-up.css'
import { useNavigate } from 'react-router-dom'
import JustAHeader from './JustAHeader'

export default function LogIn() {

    const navigate = useNavigate()
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
            
            <JustAHeader />

            <form id='unsigned'>

                {error ? <p id='error'>{error}</p> : null}

                <p>Sign in</p>

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

                <div className='flex horizontal' style={{ gap: "1rem" }}>
                    <p>New to RedditClone?</p>

                    <p className='mouse-pointer' style={{ textDecoration: "underline" }}
                        onClick={() => navigate('/sign-up')}>Create an account</p>
                </div>

            </form>
        </div>
    )
}
