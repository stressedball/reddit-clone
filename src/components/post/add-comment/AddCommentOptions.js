import { db } from '../../../firebase/getAuthDb'
import { addDoc, collection, serverTimestamp, } from 'firebase/firestore'
import { lightBorder } from '../../../sc-css/COLORS'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

export default function AddCommentOptions({ reinitializeComment, darkMode, postId, comment, user }) {

    const [buttonEnable, setButtonEnable] = useState()

    async function handleComment() {
        if (comment === undefined || comment === "") return

        try {
            addDoc(collection(db, 'comments'),
                {
                    poster: `${user.id}`,
                    comment: `${comment}`,
                    timeStamp: serverTimestamp(),
                    votes: 0,
                    parent: postId
                }
            )
            reinitializeComment()
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        if (comment !== undefined && comment !== '') setButtonEnable('enabled')
        else setButtonEnable('')
    }, [comment])

    return (
        <StyledDiv className={darkMode}>

            <CommentButton className={`${darkMode} ${buttonEnable}`} onClick={() => handleComment()}
            >Comment</CommentButton>
        
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    box-sizing: border-box;
    display:flex;
    justify-content: end;
    background-color: #F6F7F8;
    width: calc(100% - 38px);
    padding:4px 8px 4px 8px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    margin-bottom:12px;
    border: 1px solid ${lightBorder};

    &.dark {
        background-color: #272729;
    }
`

const CommentButton = styled.button`
    font-size: 12px;
    font-weight:700;
    background-color: #364266;
    filter:grayscale(1);
    border-radius:14px;
    padding: 4px 20px 4px 20px;
    border:none;
    color:rgba(255, 255, 255, 0.5);
    position:relative;

    &::before {
        content:"";
        position: absolute;
        top:0;
        left:0;
        width:100%;
        height:100%;
        background-color: #FFFFFF;
        border-radius:inherit;
        border:none;
        opacity:0;
    }
    
    &.enabled {
        background-color: rgb(74 150 196);
        filter : none;
        color: rgb(255 255 255);
    }

    &.enabled:hover {
        cursor : pointer;
    }

    &:hover {
        cursor: not-allowed;
    }

    &:hover::before {
        opacity:0.04;
    }

    &.dark::before {
        background-color:#1A1A1B;
    }

    &.dark {
        color: rgb(26 26 27 / 50%);
        background-color: #dfe1e3;
    }

    &.dark.enabled {
        background-color:#D7DADC;
        color:#1A1A1B;
    }
    
`