import { useContext, useRef } from "react"
import AddCommentOptions from "./AddCommentOptions"
import { GlobalContext } from "../../providers/GlobalProvider"
import styled from "styled-components"
import { lightBorder } from "../../../sc-css/COLORS"

const StyledSection = styled.div`
    padding-left:40px;
    background-color:inherit;
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
    border-bottom-border: none;
`

export default function AddComment({ darkMode, post, postId }) {

    const { user } = useContext(GlobalContext)
    const comment = useRef('')

    return (
        <StyledSection id="add-comment" className={`${darkMode}`}>
            <p style={{ fontSize: "12px", margin: "0" }}
            >Comment as <strong>{user.data.userName}</strong></p>

            <div style={{ display: "flex", flexDirection: "column", backgroundColor: "inherit" }}>
                <TextArea ref={comment}></TextArea>

                <AddCommentOptions post={post} postId={postId} text={comment} user={user} darkMode={darkMode} />

            </div>
        </StyledSection>
    )
}