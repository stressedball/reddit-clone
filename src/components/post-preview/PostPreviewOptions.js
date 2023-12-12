import styled from 'styled-components';
import {SVGStyled, Tile} from '../../sc-css/atomic';
import CommentsCount from '../multi-usage/CommentsCount';
import {useContext} from 'react';
import {GlobalContext} from '../providers/GlobalProvider';
import ShareButton from '../multi-usage/ShareButton';

export default function PostPreviewOptions({darkMode, showContent, post}) {
    const {user} = useContext(GlobalContext);
    const handleDisplayText = () => {
        showContent();
    };

    return (
        <Div>
            {user ? (
                <Tile className={`${darkMode} option`} onClick={handleDisplayText}>
                    {/* Expand svg */}
                    <SVGStyled
                        style={{stroke: 'none'}}
                        className={`${darkMode}`}
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path d='M22 21.998L16 22v-.998L20.34 21l-5.75-5.751.659-.66L21 20.34l.002-4.34H22zM8 2v.998L3.66 3l5.75 5.751-.659.66L3 3.66 2.998 8H2l.002-6z' />
                        <path style={{fill: 'none', stroke: 'none'}} d='M0 0h24v24H0z' />
                    </SVGStyled>
                </Tile>
            ) : null}

            <CommentsCount darkMode={darkMode} post={post} />

            <ShareButton post={post} darkMode={darkMode} />
        </Div>
    );
}

const Div = styled.div`
    display: flex;
    align-items: center;
    flex: 1 0 auto;
    font-size: 12px;
    margin-top: 8px;
`;
