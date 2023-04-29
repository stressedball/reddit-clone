import styled from "styled-components";
import { SVGStyled } from "../../sc-css/atomic";
import { lightGrayHover, darkHoverLight } from "../../sc-css/COLORS";
import { CommentContainer, UserName, UserAvatarContainer } from "./Comment";
import CommentDateStamp from "./CommentDateStamp";
import UserAvatar from "../multi-usage/UserAvatar";

export default function ExpandComment({ darkMode, comment, poster, handleCommentExpand }) {
    return (
        <CommentContainer className={darkMode} style={{ alignItems: "center" }}>

            <div style={{ height: "100%", width: "36px", display: "flex" }}>
                <ExpandSVG onClick={() => handleCommentExpand()}
                    className={`${darkMode}`}
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 21.998L16 22v-.998L20.34 21l-5.75-5.751.659-.66L21 20.34l.002-4.34H22zM8 2v.998L3.66 3l5.75 5.751-.659.66L3 3.66 2.998 8H2l.002-6z" />
                    <path style={{ stroke: "none", fill: "none" }} d="M0 0h24v24H0z" />
                </ExpandSVG>
            </div>

            <UserAvatarContainer style={{ margin: "0", marginRight: "3px" }}><UserAvatar navigation={true} user={poster} /></UserAvatarContainer>

            <UserName style={{ marginRight: "3px" }}>{poster ? poster.data.userName : null}</UserName>

            <CommentDateStamp comment={comment} />

        </CommentContainer>
    )
}

const ExpandSVG = styled(SVGStyled)`
    height: 28px;
    margin: auto;
    padding:4px;
    border-radius:4px;

    &:hover {
        background-color:${lightGrayHover};
        cursor: pointer;
    }

    &.dark:hover {
        background-color:${darkHoverLight};
    }

`