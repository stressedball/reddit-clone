import { useContext, useRef } from "react"
import AddCommentOptions from "./AddCommentOptions"
import { GlobalContext } from "../providers/GlobalProvider"

export default function AddComment({ post, postId }) {

    const { user } = useContext(GlobalContext)
    const comment = useRef('')

    return (
        <section
            id="form"
        >
            <p>Comment as <strong>{user.data.userName}</strong></p>

            <textarea
                className=''
                ref={comment}
            ></textarea>

            <AddCommentOptions
                post={post}
                postId={postId}
                text={comment}
                user={user}
            />
        </section>
    )
}