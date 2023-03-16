import React, { useState } from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'
import styled from "styled-components";
import { SVGStyled } from '../../sc-css/atomic';

const CenteredForm = styled.div`
    border: 1px solid;
    width: fit-content;
    display:flex;
    align-items : center;
    justify-content:center;
    border-radius: 12px;
    padding:0 12px 0 12px;
    background-color:#fff;
    height:640px;
    width:400px;
    position:relative;
`

const StyledContainer = styled.div`
    position: fixed;
    display:flex;
    align-items:center;
    justify-content:center;
    height:100vh;
    width:100vw;
    left:0;
    top:0;
    z-index:10;
    background-color:rgb(0 0 0 / 40%);
    &:hover {
        cursor: default;
    }
    `
const StyledDiv = styled.div`
    max-width: 320px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    height: fit-content;
    gap:6px;
`

export default function AuthenticateUser({ handleLoginScreen }) {

    const [isSignUp, setIsSignUp] = useState(false)

    const handleSignUp = () => setIsSignUp(!isSignUp)

    return (
        <StyledContainer>
            <CenteredForm>

                <SVGStyled onClick={handleLoginScreen}
                    style={{ position: "absolute", height: "30px", width: "30px", top: "5px", right: "5px" }}
                    viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <g id="icomoon-ignore">
                    </g>
                    <path d="M10.722 9.969l-0.754 0.754 5.278 5.278-5.253 5.253 0.754 0.754 5.253-5.253 5.253 5.253 0.754-0.754-5.253-5.253 5.278-5.278-0.754-0.754-5.278 5.278z" fill="currentColor"></path>
                </SVGStyled>

                <StyledDiv>

                    {
                        isSignUp ?
                            <SignUp handleLoginScreen={handleLoginScreen} handleSignUp={handleSignUp} />
                            :
                            <LogIn handleSignUp={handleSignUp} />
                    }
                </StyledDiv>
            </CenteredForm>
        </StyledContainer>
    )
}
