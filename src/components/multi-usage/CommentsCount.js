import { SVGStyled, StyledOptionText } from "../../sc-css/atomic"
import styled from "styled-components"

const NoHover = styled(SVGStyled)`
    &:hover {
        cursor: default;
    }
`

export default function CommentsCount({ comments, darkMode }) {

    return (
        <>
            <NoHover
                className={`${darkMode}`}
                fill="currentColor"
                viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M14.5 2h-13l-.5.5v9l.5.5H4v2.5l.854.354L7.707 12H14.5l.5-.5v-9l-.5-.5zm-.5 9H7.5l-.354.146L5 13.293V11.5l-.5-.5H2V3h12v8z" />
            </NoHover>

            {comments ? <StyledOptionText>{comments.length} Comments</StyledOptionText>
                : null
            }
        </>
    )
}