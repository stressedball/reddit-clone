import React, { useEffect, useRef, useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../firebase/getAuthDb'
import { setDoc, doc, serverTimestamp } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom'
// import '../../css/log-in_sign-up.css'
import JustAHeader from './JustAHeader'
import { CenteredForm } from '../../sc-css/CenteredForm'


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
                setDoc(doc(db, 'users', `${user.user.uid}`), {
                    userName: userNameValue,
                    dateCreation: serverTimestamp(),
                    status: null,
                    lastSeen: null
                })
                navigate('/')
            })
            .catch(() => {
                setError('Failed to create account.')
            })

    }

    useEffect(() => { }, [error])

    return (

        <div id='container'>

            <JustAHeader />

            <CenteredForm>

                {
                    error ? <p id='error'>{error}</p> : null
                }

                <input
                    ref={userName}
                    placeholder='Enter your username' minLength='5' required={true} type="text"
                ></input>

                <input ref={email}
                    placeholder='Enter your email' type='email' required={true}
                ></input>

                <input
                    ref={password}
                    type='password' placeholder='Password' minLength='6' required={true}
                ></input>

                <input
                    ref={confirmPassword}
                    type='password' placeholder='Confirm password' minLength='6' required={true}
                ></input>

                <button
                    onClick={handleCreateAccount}
                >Create RedditClone account</button>

                <p style={{ textAlign: 'center' }}>Or</p>

                <GoogleAuth />

                <p onClick={() => navigate('/')}
                    className='mouse-pointer'
                    style={{ textDecoration: "underline", alignSelf: "center" }}
                >Return to log-in</p>

            </CenteredForm>
        </div>
    )
}


function GoogleAuth() {

    return (
        <div>

        </div>
    )
}