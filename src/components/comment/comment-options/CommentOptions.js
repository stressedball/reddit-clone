import React from 'react'
import { useContext } from 'react'
import styled from 'styled-components'
import { HorizontalFlex, Tile } from '../../../sc-css/atomic'
import { lightGrayHover, darkHoverLight } from '../../../sc-css/COLORS'
import { GlobalContext } from '../../providers/GlobalProvider'
import DeleteButton from '../../multi-usage/DeleteButton'
import EditButton from '../../multi-usage/EditButton'
import CommentVotes from './CommentVotes'
import { ReplyToComment } from './ReplyToComment'

export default function CommentOptions({ handleEdit, handleReply, darkMode, comment }) {

    const { user } = useContext(GlobalContext)

    if (!comment) return null

    return (
        <HorizontalFlex style={{ gap: "4px" }}>

            <CommentVotes darkMode={darkMode} comment={comment} />

            <ReplyToComment handleReply={handleReply} darkMode={darkMode} comment={comment} user={user} />

            {
                user ?
                    user.id === comment.data.poster ?
                        <>
                            <EditButton handleEdit={handleEdit}  />
                            <DeleteButton darkMode={darkMode} />
                        </>
                        : null : null
            }
        </HorizontalFlex>
    )
}

export const StyledTile = styled(Tile)`
    font-size:12px;
    font-weight:700;
    padding: 16px 4px;
    max-height:22px;
    border-radius:4px;
    color: rgb(135, 138, 140);
    display:flex;
    gap:3px;

    &:hover {
        background-color:${lightGrayHover};
    }

    &.dark:hover {
        background-color:${darkHoverLight};
    }

    & > p {
        margin:0;
    }
`