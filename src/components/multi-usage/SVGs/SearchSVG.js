import { SVGStyled } from "../../../sc-css/atomic"

export default function SearchSVG({darkMode}) {
    return (
        <SVGStyled style={{ height: "22px", width: "22px" }} className={darkMode}
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.842 21.134l-6.843-6.843a7.317 7.317 0 1 0-.708.708l6.843 6.843a.5.5 0 1 0 .708-.708zM9.5 15.8a6.3 6.3 0 1 1 6.3-6.3 6.307 6.307 0 0 1-6.3 6.3z" /><path style={{ fill: "none", stroke: "none" }} d="M0 0h24v24H0z" />
        </SVGStyled>
    )
}
