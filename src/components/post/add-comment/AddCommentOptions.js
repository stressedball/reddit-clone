import { db } from '../../../firebase/getAuthDb'
import { addDoc, collection, serverTimestamp, } from 'firebase/firestore'
import { lightBorder } from '../../../sc-css/COLORS'
import styled from 'styled-components'
import { useEffect, useState } from 'react'

export default function AddCommentOptions({ darkMode, postId, text, user }) {

    const [buttonEnable, setButtonEnable] = useState()

    const handleComment = () => {
        const comments = collection(db, 'posts', postId, 'comments')
        if (text === undefined || text === "") return
        addDoc(comments,
            {
                poster: `${user.id}`,
                text: `${text}`,
                timeStamp: serverTimestamp(),
                votes: 0
            }
        )
    }

    useEffect(() => {
        if (text !== undefined && text !== '') setButtonEnable('enabled')
        else setButtonEnable()
    }, [text])

    return (
        <StyledDiv >
            <CommentButton className={`${darkMode} ${buttonEnable}`} onClick={handleComment}
            >Comment</CommentButton>
        </StyledDiv>
    )
}

const StyledDiv = styled.div`
    box-sizing: border-box;
    display:flex;
    justify-content: end;
    background-color: inherit;
    width: calc(100% - 38px);
    padding:4px 8px 4px 8px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    margin-bottom:12px;
    border: 1px solid ${lightBorder};
`

const CommentButton = styled.button`
    font-size: 12px;
    font-weight:700;
    background-color:#364266;
    filter:grayscale(1);
    border-radius:14px;
    padding: 4px 20px 4px 20px;
    border:none;
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