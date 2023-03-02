import { useContext, useRef } from "react"
import AddCommentOptions from "./AddCommentOptions"
import { GlobalContext } from "../../providers/GlobalProvider"

export default function AddComment({ darkMode, post, postId }) {

    const { user } = useContext(GlobalContext)
    const comment = useRef('')

    return (
        <section
            id="add-comment"
        >
            <p>Comment as <strong>{user.data.userName}</strong></p>

            <textarea
                className={`${darkMode}`}
                ref={comment}
            ></textarea>

            <AddCommentOptions
                post={post}
                postId={postId}
                text={comment}
                user={user}
                darkMode={darkMode}
            />
        </section>
    )
}