import { useContext } from 'react'
import { HorizontalFlex } from '../../../sc-css/atomic'
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
