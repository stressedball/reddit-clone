import Votes from "./Votes"
import '../../css/sub-list.css'

export default function PostsPreview({ subs }) {

    return (
        subs.map(post => {
            return (
                <div
                    key={post.id}
                    className="post-preview"
                >
                    <div>
                        <p>{post.data.title}</p>
                        <p>{post.data.text}</p>
                    </div>
                    < Votes
                        post={post}
                        postId={post.id}
                    />
                </div>
            )
        })

    )
}