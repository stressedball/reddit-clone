import { useContext, useState } from "react"
import styled from "styled-components"
import { darkTwo, darkBorder     } from "../../../sc-css/COLORS"
import { TextArea } from "../../../sc-css/atomic"
import { GlobalContext } from "../../providers/GlobalProvider"
import AddCommentOptions from "./AddCommentOptions"

export default function AddComment({ darkMode, post, postId }) {

    const { user } = useContext(GlobalContext)
    const [comment, setComment] = useState()

    const reinitializeComment = () => setComment('')

    return (
        <StyledSection className={darkMode}>

            <p style={{ fontSize: "12px", margin: "0", marginBottom:"4px" }}
            >Comment as <strong>{user.data.userName}</strong></p>

            <StyledDiv>

                <TextArea className={darkMode} value={comment} onChange={(e) => setComment(e.target.value)}></TextArea>

                <AddCommentOptions reinitializeComment={reinitializeComment} post={post} postId={postId} comment={comment} user={user} darkMode={darkMode} />

            </StyledDiv>
        </StyledSection>
    )
}

const StyledSection = styled.div`
    background-color:inherit;
    margin-top: 20px;

    &.dark {
        background-color: ${darkTwo};
    }
`

const StyledDiv = styled.div`
    display:flex;
    flex-direction:column;
    background-color:inherit;
    border-top-right-radius:4px;  
    border-top-left-radius:4px;  
`