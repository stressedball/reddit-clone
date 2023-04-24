import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { StyledTile } from "./CommentOptions"
import { lightBorder } from "../../../sc-css/COLORS"
import { db } from "../../../firebase/getAuthDb"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { ThemeContext } from "../../providers/ThemeProvider"
import { GlobalContext } from "../../providers/GlobalProvider"

export function ReplyToComment({ handleReply, darkMode }) {

    return (
        <StyledTile className={`${darkMode}`} onClick={() => handleReply()}>
            <p>Reply</p>
        </StyledTile>
    )
}

export function ReplyContainer({ handleReply, comment }) {

    const {user} = useContext(GlobalContext)
    const {darkMode} = useContext(ThemeContext)
    const [buttonEnable, setButtonEnable] = useState()
    const [text, setText] = useState()

    useEffect(() => {
        if (text) setButtonEnable('enabled')
        else setButtonEnable()
    }, [text])

    async function handleSubmit() {
        if (!text) return

        try {
            addDoc(collection(db, 'comments'), {
                poster: `${user.id}`,
                text: `${text}`,
                timeStamp: serverTimestamp(),
                votes: 0,
                thread: comment.id
            })
            handleReply()
        } catch (error) {
            alert(error)
        }
    }

    return (
        <Container>

            <TextArea className={darkMode} onChange={(e) => { setText(e.target.value) }}  />

            <StyledDiv className={darkMode}>
                <CancelButton className={darkMode} onClick={() => handleReply()}>Cancel</CancelButton>
                <ReplyButton className={buttonEnable} onClick={handleSubmit}>Reply</ReplyButton>
            </StyledDiv>

        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction:column;
    padding-right:20px;
`

const TextArea = styled.textarea`
    padding:0;
    resize:vertical;
    min-height:122px;
    border:1px solid ${lightBorder};
    background-color:inherit;
    border-top-right-radius:4px;
    border-top-left-radius:4px;
    border-bottom: none;

    &:focus {
        outline:none;
    }

    &.dark {
        color: white;
    }
`

const ReplyButton = styled.button`
    background-color:#364266;
    filter:grayscale(1);
    color:rgba(255, 255, 255, 0.5);

    &.enabled {
        background-color:rgb(74 150 196);
        filter : none;
        color: rgb(255 255 255);
    }

    &.enabled:hover {
        cursor : pointer;
    }

    &:hover {
        cursor: not-allowed;
    }
`

const StyledDiv = styled.div`
    box-sizing: border-box;
    display:flex;
    justify-content: end;
    background-color: #F6F7F8;
    padding:4px 8px 4px 8px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    margin-bottom:12px;
    border: 1px solid ${lightBorder};

    &.dark {
        background-color: #272729;
    }

    & > button {
        font-size: 12px;
        font-weight:700;
        margin: 0;
        border-radius: 14px;
        padding: 0 20px;
        margin: auto 8px;
        height: 24px;
        border: none;
    }
`

const CancelButton = styled.button`
    color: #0079D3;
    background-color: inherit;
    position: relative;

    &::before {
        content:'';
        position: absolute;
        background-color: #0079D3;
        height:100%;
        width:100%;
        top: 0;
        left: 0;
        border-radius: inherit;
        opacity: 0;
    }

    &.dark::before {
        background-color: #D7DADC;
    }

    &:hover {
        cursor: pointer;
    }
    
    &:hover::before {
        opacity: 0.04;
    }

    &.dark {
        color: inherit;
    }
`

// const Thread = styled.div`
//     width: 2px;
//     background-color: #EDEFF1; 
//     height:100%;
//     margin: auto;

//     &:hover {
//         background-color: #0079D3;
//         cursor: pointer;
//     }

//     &.dark {
//         background-color: #343536;
//     }

//     &.dark:hover {
//         background-color: ${lightBackgroundColor};
//     }
// `