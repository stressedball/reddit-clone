import { useContext, useState } from "react"
import AddCommentOptions from "./AddCommentOptions"
import { GlobalContext } from "../../providers/GlobalProvider"
import styled from "styled-components"
import { darkTwo, lightBackgroundColor, lightBorder } from "../../../sc-css/COLORS"

export default function AddComment({ darkMode, post, postId }) {

    const { user } = useContext(GlobalContext)
    const [comment, setComment] = useState()

    const reinitializeComment = () => setComment('')

    return (
        <StyledSection className={darkMode}>

            <p style={{ fontSize: "12px", margin: "0", marginBottom:"4px" }}
            >Comment as <strong>{user.data.userName}</strong></p>

            <StyledDiv>

                <TextArea className={darkMode} onChange={(e) => setComment(e.target.value)}></TextArea>

                <AddCommentOptions reinitializeComment={reinitializeComment} post={post} postId={postId} comment={comment} user={user} darkMode={darkMode} />

            </StyledDiv>
        </StyledSection>
    )
}

const StyledSection = styled.div`
    background-color:inherit;
    border-top-right-radius:4px;  
    border-top-left-radius:4px;  
    background-color: ${lightBackgroundColor};
    padding:24px 0 24px 40px;

    &.dark {
        background-color: ${darkTwo};
    }
`

const TextArea = styled.textarea`
    width:calc(100% - 40px);
    padding:0;
    resize:vertical;
    min-height:122px;
    border:1px solid ${lightBorder};
    background-color:inherit;
    border-top-right-radius:4px;
    border-top-left-radius:4px;
    border-bottom: none;

    &:focus {
        outline: none;
    }

    &.dark {
        color: inherit;
    }
`

const StyledDiv = styled.div`
    display:flex;
    flex-direction:column;
    background-color:inherit;
    border-top-right-radius:4px;  
    border-top-left-radius:4px;  
`