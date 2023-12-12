import { useContext } from "react"
import { ThemeContext } from "../../providers/ThemeProvider"
import { SVGStyled } from "../../../sc-css/atomic"

export default function CreateSVG() {

    const { darkMode } = useContext(ThemeContext)

    return (
        <SVGStyled
            className={`${darkMode}`}
            viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
            <path d="M915.744 213v702.744H213v87.842h702.744v702.744h87.842v-702.744h702.744v-87.842h-702.744V213z" fillRule="evenodd" />
        </SVGStyled>
    )
}
