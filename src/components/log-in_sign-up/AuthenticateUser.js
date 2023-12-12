import React, { useContext, useState } from 'react'
import styled from "styled-components";
import { SVGStyled, Tile } from '../../sc-css/atomic';
import LogIn from './LogIn'
import SignUp from './SignUp'
import { darkBorder, darkMainText, darkTwo, lightBorder } from '../../sc-css/COLORS';
import { ThemeContext } from '../providers/ThemeProvider';

export default function AuthenticateUser({ handleLoginScreen}) {

    const [isSignUp, setIsSignUp] = useState(false)
    const {darkMode}=useContext(ThemeContext)
    const handleSignUp = () => setIsSignUp(!isSignUp)

    return (
        <Container className={darkMode}>
            <CenteredForm className={darkMode}>
                <Tile
                    onClick={() => { handleLoginScreen() }}
                    className={`${darkMode} option`}
                    style={{ position: "absolute", top: "5px", right: "5px", height: "fit-content", padding: "4px" }}>
                    <SVGStyled className={darkMode}
                        style={{ height: "34px", width: "34px" }}
                        viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                        <path d="M10.722 9.969l-0.754 0.754 5.278 5.278-5.253 5.253 0.754 0.754 5.253-5.253 5.253 5.253 0.754-0.754-5.253-5.253 5.278-5.278-0.754-0.754-5.278 5.278z" style={{ stroke: "none" }}></path>
                    </SVGStyled>
                </Tile>
                
                <StyledDiv>
                    {
                        isSignUp ?
                            <SignUp handleSignUp={handleSignUp} />
                            :
                            <LogIn handleLoginScreen={handleLoginScreen} handleSignUp={handleSignUp} />
                    }
                </StyledDiv>
            </CenteredForm>
        </Container>
    )
}

const CenteredForm = styled.div`
    border: 1px solid;
    border-color: ${lightBorder};
    width: fit-content;
    display:flex;
    align-items : center;   
    justify-content:center;
    border-radius: 12px;
    padding:0 12px 0 12px;
    background-color:#fff;
    height:600px;
    width:400px;
    position:relative;
    box-shadow: 0 0 25px 2px rgba(0, 0, 0, 0.3);

    &.dark {
        border-color: ${darkBorder};
        background-color: ${darkTwo};
        color: ${darkMainText};
        box-shadow: 0 0 6px 1px rgba(255, 255, 255, 0.2);
    }
`

const Container = styled.div`
    position: fixed;
    display:flex;
    align-items:center;
    justify-content:center;
    height:100vh;
    width:100vw;
    left:0;
    top:0;
    z-index:10;
    background-color:rgb(0 0 0 / 0.5);

    &:hover {
        cursor: default;
    }

    &.dark {
        background-color:rgb(255 255 255 / 0.2);
    }
    `

const StyledDiv = styled.div`
    max-width: 320px;
    display:flex;
    flex-direction:column;
    height: fit-content;
    gap:6px;
    border-color:inherit;
    font-size:14px;
`
