import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../../providers/GlobalProvider'
import DeleteButton from '../../multi-usage/DeleteButton'
import EditButton from '../../multi-usage/EditButton'
import CommentVotes from './CommentVotes'
import { HorizontalFlex, Tile } from '../../../sc-css/atomic'
import styled from 'styled-components'
import { lightGrayHover, darkHoverLight } from '../../../sc-css/COLORS'
import { ReplyToComment } from './ReplyToComment'

export default function CommentOptions({ handleReply, darkMode, comment }) {

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
                        <ReplyToComment handleReply={handleReply} darkMode={darkMode} comment={comment} user={user} />
                    :
                    <PublicOptions />
            }
        </HorizontalFlex>
    )
}

function EditComment({ darkMode }) {

    return (
        <HorizontalFlex style={{ gap: '3px' }}>
            <StyledTile className={`${darkMode}`}>
                <EditButton darkMode={darkMode} />
            </StyledTile>
            <StyledTile className={`${darkMode}`}>
                <DeleteButton darkMode={darkMode} />
            </StyledTile>
        </HorizontalFlex>
    )
}

function PublicOptions() {
    return (
        <p>Public options</p>
    )
}

export const StyledTile = styled(Tile)`
    font-size:12px;
    font-weight:700;
    max-width:fit-content;
    padding: 6px 4px;
    border-radius:4px;
    color: rgb(135, 138, 140);

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