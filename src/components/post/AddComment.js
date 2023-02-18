import { useContext, useRef } from "react"
import AddCommentOptions from "./AddCommentOptions"
import { GlobalContext } from "../providers/GlobalProvider"

export default function AddComment({ post, postId }) {

    const { userName, userId } = useContext(GlobalContext)
    const comment = useRef('')

    return (
        <section
            id="form"
        >
            <p>Comment as {userName}</p>
            <textarea
                className=''
                ref={comment}
            ></textarea>
            <AddCommentOptions
                post={post}
                postId={postId}
                text={comment}
                userId={userId}
            />
        </section>
    )
}