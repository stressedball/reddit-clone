import { useContext, useEffect, useState } from "react"
import { StyledOptionText, Tile } from "../../sc-css/atomic"
import { GlobalContext } from "../providers/GlobalProvider"
import commentsPopulate from "../comment/commentPopulate"
import CommentSVG from "./CommentSVG"

export default function CommentsCount({ post, darkMode }) {

    const { comments } = useContext(GlobalContext)
    const [postComments, setPostComments] = useState()

    useEffect(() => {
        if (comments && post) {
            setPostComments(comments.filter(comment => comment.data.parent === post.id))
        }
    }, [comments, post])

    if (!postComments) return <div>Loading</div>

    const totalComments = commentsPopulate(postComments, comments)

    return (
        <Tile className={`${darkMode} option no-hover`}>

            <CommentSVG darkMode={darkMode} />

            <StyledOptionText>{totalComments.length} Comments</StyledOptionText>

        </Tile>
    )
}

function getCount() {

}