import styled from "styled-components"
import { SVGStyled } from "../../../sc-css/atomic"

export default function SmallArrow({ darkMode, className }) {
    return (
        <StyledArrow className={`${darkMode} ${className}`} style={{ stroke: "none" }} viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
            <path d="M759.2 419.8L697.4 358 512 543.4 326.6 358l-61.8 61.8L512 667z" />
        </StyledArrow>
    )
}

const StyledArrow = styled(SVGStyled)`
    transition: transform 240ms ease-in-out;

    &.reverse {
        transform: rotate(180deg);
        transition: transform 240ms ease-in-out;
    }
`
