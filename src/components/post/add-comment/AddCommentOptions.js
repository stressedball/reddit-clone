import { db } from '../../../firebase/getAuthDb'
import { addDoc, collection, serverTimestamp, } from 'firebase/firestore'
import { lightBorder } from '../../../sc-css/COLORS'
import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { BottomButtonsDiv } from '../../../sc-css/atomic'

export default function AddCommentOptions({ reinitializeComment, darkMode, postId, comment, user }) {

    const [buttonEnable, setButtonEnable] = useState()

    async function handleComment() {
        if (!comment || comment === "") return

        try {
            addDoc(collection(db, 'comments'),
                {
                    poster: `${user.id}`,
                    text: `${comment}`,
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
        if (comment && comment !== '') setButtonEnable('enabled')
        else setButtonEnable('')
    }, [comment])

    return (
        <BottomButtonsDiv className={darkMode}>

            <CommentButton className={`${darkMode} ${buttonEnable}`} onClick={() => handleComment()}
            >Comment</CommentButton>
        
        </BottomButtonsDiv>
    )
}

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