import styled from "styled-components"
import { StyledTile } from "./CommentOptions"
import { lightBorder } from "../../../sc-css/COLORS"

export function ReplyToComment({ handleReply, darkMode }) {

    return (
        <StyledTile className={`${darkMode}`} onClick={() => handleReply()}>
            <p>Reply</p>
        </StyledTile>
    )
}

export function ReplyContainer({ comment }) {

    return (
        <Container>

            <TextArea />

            <StyledDiv>
                <ReplyButton>Reply</ReplyButton>
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

`

const ReplyButton = styled.button`
    font-size: 12px;
    font-weight:700;

    background-color:#364266;
    filter:grayscale(1);

    border-radius:14px;
    padding: 4px 20px 4px 20px;
    border:none;

    color:rgba(255, 255, 255, 0.5);
`

const StyledDiv = styled.div`
    box-sizing: border-box;
    display:flex;
    justify-content: end;
    background-color: inherit;
    padding:4px 8px 4px 8px;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
    margin-bottom:12px;
    border: 1px solid ${lightBorder};
`