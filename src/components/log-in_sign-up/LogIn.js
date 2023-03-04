import React, { useContext, useEffect, useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase/getAuthDb'
import { useRef } from 'react'
import { ThemeContext } from '../providers/ThemeProvider'
import { SVGStyled } from '../../sc-css/atomic'
import { Button, Input, StyledText } from './Style'

export default function LogIn({ handleSignUp }) {

    const { darkMode } = useContext(ThemeContext)
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
        <>
            {error ? <p id='error'>{error}</p> : null}

            <StyledText className='title'>Log in</StyledText>

            <StyledText className='small'>By continuing, you don't need to agree to anything since this is a showcase project.</StyledText>

            <Button>
                <SVGStyled style={{ paddingLeft: "4px" }}>
                    <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M30.0014 16.3109C30.0014 15.1598 29.9061 14.3198 29.6998 13.4487H16.2871V18.6442H24.1601C24.0014 19.9354 23.1442 21.8798 21.2394 23.1864L21.2127 23.3604L25.4536 26.58L25.7474 26.6087C28.4458 24.1665 30.0014 20.5731 30.0014 16.3109Z" fill="#4285F4" />
                        <path d="M16.2863 29.9998C20.1434 29.9998 23.3814 28.7553 25.7466 26.6086L21.2386 23.1863C20.0323 24.0108 18.4132 24.5863 16.2863 24.5863C12.5086 24.5863 9.30225 22.1441 8.15929 18.7686L7.99176 18.7825L3.58208 22.127L3.52441 22.2841C5.87359 26.8574 10.699 29.9998 16.2863 29.9998Z" fill="#34A853" />
                        <path d="M8.15964 18.769C7.85806 17.8979 7.68352 16.9645 7.68352 16.0001C7.68352 15.0356 7.85806 14.1023 8.14377 13.2312L8.13578 13.0456L3.67083 9.64746L3.52475 9.71556C2.55654 11.6134 2.00098 13.7445 2.00098 16.0001C2.00098 18.2556 2.55654 20.3867 3.52475 22.2845L8.15964 18.769Z" fill="#FBBC05" />
                        <path d="M16.2864 7.4133C18.9689 7.4133 20.7784 8.54885 21.8102 9.4978L25.8419 5.64C23.3658 3.38445 20.1435 2 16.2864 2C10.699 2 5.8736 5.1422 3.52441 9.71549L8.14345 13.2311C9.30229 9.85555 12.5086 7.4133 16.2864 7.4133Z" fill="#EB4335" />
                    </svg>
                </SVGStyled>
                <p style={{ width: "100%" }}>Continue with Google</p>
            </Button>

            <StyledText style={{textAlign:"center"}}>Or</StyledText>

            <Input
                type="email"
                placeholder='email'
                ref={email}
                required={true}
            ></Input>

            <Input
                type="password"
                ref={password}
                placeholder='password'
                required={true}
            ></Input>

            <Button onClick={handleLogIn}>Log in</Button>

            <div style={{ display: "flex", alignItems: "center" }}>
                <StyledText className='small' >New to RedditClone?</StyledText>

                <StyledText className='small link' onClick={() => handleSignUp()}>Sign-up</StyledText>
            </div>

        </>
    )
}
