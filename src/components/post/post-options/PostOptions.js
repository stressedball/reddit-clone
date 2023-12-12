import CommentsCount from '../../multi-usage/CommentsCount';
import ShareButton from '../../multi-usage/ShareButton';
import Etcetera from './Etcetera';
import SaveButton from '../../multi-usage/SaveButton';
import {HorizontalFlex} from '../../../sc-css/atomic';
import styled from 'styled-components';

export default function PostOptions({handleEditPost, user, post, darkMode}) {
    return (
        <StyledDiv>
            <CommentsCount post={post} darkMode={darkMode} />
            <ShareButton darkMode={darkMode} post={post} />
            <SaveButton darkMode={darkMode} user={user} post={post} />
            <Etcetera handleEditPost={handleEditPost} darkMode={darkMode} post={post} user={user} />
        </StyledDiv>
    );
}

const StyledDiv = styled(HorizontalFlex)`
    gap: 4px;
    font-size: 12px;
    font-weight: 700;
    color: rgb(135, 138, 140);
`;
