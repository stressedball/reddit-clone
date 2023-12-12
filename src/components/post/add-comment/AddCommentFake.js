import { useState } from "react";
import styled from "styled-components";
import { HorizontalFlex  } from "../../../sc-css/atomic";
import AuthenticateUser from "../../log-in_sign-up/AuthenticateUser";
import { darkBorder } from "../../../sc-css/COLORS";
import CreateSVG from "../../multi-usage/SVGs/CreateSVG";

export default function AddCommentFake({ darkMode }) {

    const [flag, setFlag] = useState(false)
    const handleLoginScreen = () => setFlag(false)

    return (
        <>
            <Container className={darkMode} onClick={() => setFlag(true)}>
                <CreateSVG />
                <p style={{ margin: "0", marginLeft:"10px", fontWeight:'600', fontSize:"14px" }}>Add a comment</p>
            </Container>
            
            {flag ? <AuthenticateUser handleLoginScreen={handleLoginScreen} /> : null}
        </>
    )
}

const Container = styled(HorizontalFlex)`
    border-radius:22px;
    border:1px solid black;
    width:fit-content;
    padding: 10px 14px;
    margin-bottom:8px;
    margin-top: 8px;
    position:relative;

    &::before {
        background-color: black;
        position:absolute;
        left:0;
        top:0;
        content:"";
        width:100%;
        height:100%;
        border-radius : inherit;
        opacity: 0;
    }

    &:hover::before {
        opacity:0.02;
        cursor:pointer;
    }

    &.dark {
        border:1px solid ${darkBorder};
    }

    &.dark::before {
        background-color:white;
    }
    
`