import styled from "styled-components"

export default function CommentDateStamp({comment}) {
    return (
        <LightText>&middot; {comment.data.timeStamp === null ? null :
            comment.data.timeStamp.toDate().toDateString()}
        </LightText>
    )
}

const LightText = styled.p`
    color: #7c7c7c;
    font-size:12px;
    font-weight:400;
    margin:0;
`