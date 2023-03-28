import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../providers/GlobalProvider'
import DeleteButton from '../../multi-usage/DeleteButton'
import EditButton from '../../multi-usage/EditButton'
import CommentVotes from './CommentVotes'
import { HorizontalFlex, Tile } from '../../../sc-css/atomic'
import styled from 'styled-components'
import { lightGrayHover, darkHoverLight } from '../../../sc-css/COLORS'

const StyledTile = styled(Tile)`
    font-size:12px;
    min-height:0;
    font-weight:700;
    &:hover {
        background-color:${lightGrayHover}
    }

    &.dark:hover {
        background-color:${darkHoverLight}
    }

    & > p {
        margin:0;
    }
`

export default function CommentOptions({ darkMode, comment }) {

    const { user } = useContext(GlobalContext)

    if (comment === undefined) return null

    return (
        <HorizontalFlex>
            <CommentVotes darkMode={darkMode} comment={comment} />
            {
                user ?
                    user.id === comment.data.poster ?
                        <EditComment darkMode={darkMode} />
                        :
                        <ReplyVote darkMode={darkMode} comment={comment} user={user} />
                    :
                    <PublicOptions />
            }
        </HorizontalFlex>
    )
}

function EditComment({ darkMode }) {

    return (
        <HorizontalFlex style={{ gap: '1rem' }}>
            <StyledTile className={`${darkMode}`}>
                <EditButton darkMode={darkMode} />
            </StyledTile>
            <StyledTile className={`${darkMode}`}>
                <DeleteButton darkMode={darkMode} />
            </StyledTile>
        </HorizontalFlex>
    )
}

function ReplyVote({ darkMode, comment, user }) {

    return (
        <StyledTile className={`${darkMode}`}>
            <p>Reply</p>
        </StyledTile>
    )
}

function PublicOptions() {
    return (
        <p>Public options</p>
    )
}