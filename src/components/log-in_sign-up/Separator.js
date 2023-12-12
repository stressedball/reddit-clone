import styled from "styled-components";
import { HR, HorizontalFlex } from "../../sc-css/atomic";
import { StyledText } from "./Style";

export default function Separator({ darkMode }) {
    return (
        <HorizontalFlex style={{ width: "100%", gap:"16px"}}>
            <HR  style={{flex:"1"}} className={darkMode} />
            <OR>OR</OR>
            <HR style={{flex:"1"}} className={darkMode} />
        </HorizontalFlex>
    )
}


const OR = styled(StyledText)`
    font-weight: 600;
    color:#787c7e;

    &.dark { color: inherit; }
`