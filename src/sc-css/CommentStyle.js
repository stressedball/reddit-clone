import styled from "styled-components"
import { HorizontalFlex } from "./atomic"
import { lightBackgroundColor, darkTwo } from "./COLORS"

export const CommentContainer = styled(HorizontalFlex)`
    padding: 8px 0;
    background-color:${lightBackgroundColor};
    display: flex;
    align-items: stretch;
    font-size: 14px;
    border-radius:inherit;
    
    &.dark {
        background-color:${darkTwo};
    }
`

export const UserName = styled.p`
    font-size:12px;
    font-weight:700;
    margin:0;

    &:hover {
        text-decoration:underline;
        cursor:pointer;
    }
`

export const UserAvatarContainer = styled(HorizontalFlex)`
    width: 28px;
    height: 28px;
    margin: auto;
`

export const EmptyComments = styled.div`
    width: 100%;
    display:flex;
    align-items:center;
    justify-content:center;
    min-height:240px;
    margin-bottom:16px; 
    color:#7c7c7c;

    &.dark {
        color:#818384;
    }
`