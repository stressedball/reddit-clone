import styled from 'styled-components';
import { SVGStyled, Tile } from '../../sc-css/atomic';
import CommentsCount from '../multi-usage/CommentsCount';

export default function PostPreviewOptions({ darkMode, showContent, post }) {

    const handleDisplayText = () => { showContent() }

    return (
        <Div>
            <StyledTile style={{ width: "36px" }} onClick={handleDisplayText}>
                <ExpandText darkMode={darkMode} />
            </StyledTile>

            <StyledTile>
                <CommentsCount darkMode={darkMode} post={post} />
            </StyledTile>
        </Div>
    )
}

function ExpandText({ darkMode }) {

    return (
        <SVGStyled
            className={`${darkMode}`}
            viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 21.998L16 22v-.998L20.34 21l-5.75-5.751.659-.66L21 20.34l.002-4.34H22zM8 2v.998L3.66 3l5.75 5.751-.659.66L3 3.66 2.998 8H2l.002-6z" />
            <path style={{ stroke: "none", fill: "none" }} d="M0 0h24v24H0z" />
        </SVGStyled>
    )
}

const Div = styled.div`
    display: flex;
    align-items: center;
    flex: 1 0 auto;
    font-size: 12px;
    margin-top: 8px;
`

const StyledTile = styled(Tile)`
    padding:0;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius:4px;
    height:36px;
`