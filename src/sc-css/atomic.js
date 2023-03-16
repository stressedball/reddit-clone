import styled from "styled-components"

export const noMarginP = styled.p`
`

export const mousePointer = styled.p`
    &:hover{
        cursor:pointer;
    }
`

export const BlueButton = styled.button`
    font-weight:bold;
    color:white;
    background-color: #0079D3;
    border-radius:12px;
    border:none;
    padding: 4px 16px ;
    width: 120px;
    font-size:14px;
    min-height:32px;
    min-width:32px;
    position:relative;

    &::before {
        background-color: #ffffff;
        position:absolute;
        left:0;
        top:0;
        content:"";
        width:100%;
        height:100%;
        border-radius : inherit;
        opacity: 0;
    }

    &:hover::before {
        opacity:0.2;
        cursor:pointer;
    }
`

export const SVGStyled = styled.svg`
    width : 20px;
    height : 20px;
    color : #878a8c;

    &.dark {

    }

    &:hover {
        cursor : pointer;
    }
`

export const StyledLink = styled.p`
    font-size:12px;
    text-decoration:underline;
    
    &:hover{
        cursor:pointer;
    }
`