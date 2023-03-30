import { db } from '../../../firebase/getAuthDb'
import { addDoc, collection, serverTimestamp, } from 'firebase/firestore'
import { lightBorder } from '../../../sc-css/COLORS'
import styled from 'styled-components'

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
`

export default function AddCommentOptions({ darkMode, postId, text, user }) {

    const handleComment = () => {

        const comments = collection(db, 'posts', postId, 'comments')

        if (text.current.value === '') return

        addDoc(comments,
            {
                poster: `${user.id}`,
                text: `${text.current.value}`,
                timeStamp: serverTimestamp(),
                votes: 0
            }
        )
    }

    return (
        <StyledDiv >
            <CommentButton className={`${darkMode}`}
                onClick={handleComment}
            >Comment</CommentButton>
        </StyledDiv>
    )
}