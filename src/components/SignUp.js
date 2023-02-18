import React, { useEffect, useRef, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import '../css/log-in.css'
import { auth, db } from '../firebase/getAuthDb'
import { setDoc, doc, addDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'

export default function SignUp() {

    const navigate = useNavigate()
    const userName = useRef()
    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef()
    const [error, setError] = useState()

    function handleCreateAccount(e) {

        const userNameValue = userName.current.value
        const emailValue = email.current.value
        const passwordValue = password.current.value
        const confirmPasswordValue = confirmPassword.current.value

        if (passwordValue.length === 0 || userName.length === 0
            || confirmPasswordValue.length === 0 || emailValue.length === 0) {
            setError('Please fill in all infos')
            return

        } else if (passwordValue !== confirmPasswordValue) {
            setError('Passwords don\'t match')
            return
        }

        e.preventDefault()

        createUserWithEmailAndPassword(auth, emailValue, passwordValue)
            .then((user) => {
                console.log(user.user.uid)
                setDoc(doc(db, 'users', `${user.user.uid}`), {
                    userName: userNameValue
                })
                navigate('/')
            })
            .catch(() => {
                setError('Failed to create account.')
            })

    }

    useEffect(() => { }, [error])

    return (

        <div
            id='container'
        >

            <form
                id='sign-up'
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

                <input
                    placeholder='Enter your username'
                    ref={userName}
                    minLength='5'
                    required={true}
                    type="text"
                ></input>

                <input
                    placeholder='Enter your email'
                    type='email'
                    ref={email}
                    required={true}
                ></input>

                <input
                    type='password'
                    placeholder='Password'
                    ref={password}
                    minLength='6'
                    required={true}
                ></input>

                <input
                    type='password'
                    placeholder='Confirm password'
                    ref={confirmPassword}
                    minLength='6'
                    required={true}
                ></input>

                <button
                    onClick={handleCreateAccount}
                >Create RedditClone account</button>

                <p>Or</p>

                <GoogleAuth />

                <a href='/'>Return to log-in</a>

            </form>
        </div>
    )
}


function GoogleAuth() {

    return (
        <div>

        </div>
    )
}