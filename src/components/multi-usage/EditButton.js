import { useContext } from 'react'
import { SVGStyled, StyledOptionText, Tile } from '../../sc-css/atomic'
import { ThemeContext } from '../providers/ThemeProvider'

export default function EditButton({ handleEdit }) {

    const { darkMode } = useContext(ThemeContext)

    return (
        <Tile className={`${darkMode} option`} onClick={() => handleEdit()}>

            <SVGStyled className={`${darkMode} small`} style={{ marginRight: '2px' }}
                version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 59.985 59.985" xmlSpace="preserve">
                <path style={{ stroke: "none" }} d="M59.985,7c0-1.87-0.728-3.627-2.05-4.949S54.855,0,52.985,0s-3.627,0.729-4.95,2.051l-1.414,1.414l-4.243,4.242l0,0
	L4.536,45.551c-0.11,0.109-0.192,0.243-0.242,0.391L0.051,58.669c-0.12,0.359-0.026,0.756,0.242,1.023
	c0.19,0.19,0.446,0.293,0.707,0.293c0.106,0,0.212-0.017,0.316-0.052l12.728-4.243c0.147-0.049,0.281-0.132,0.391-0.241
	l37.843-37.843l0,0l4.242-4.242l0,0l1.415-1.415C59.257,10.627,59.985,8.87,59.985,7z M52.278,14.778l-7.071-7.071l1.414-1.414
	l7.071,7.071L52.278,14.778z M5.68,48.109l6.197,6.196l-9.296,3.099L5.68,48.109z M13.728,53.328l-7.071-7.07L43.793,9.121
	l7.071,7.071L13.728,53.328z M55.106,11.95l-7.071-7.071l1.414-1.414C50.394,2.521,51.65,2,52.985,2s2.591,0.521,3.536,1.465
	s1.464,2.2,1.464,3.535s-0.52,2.591-1.464,3.535L55.106,11.95z"/>
            </SVGStyled>

            <StyledOptionText>Edit</StyledOptionText>
        </Tile>
    )
}
