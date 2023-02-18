import Votes from "./Votes"
import '../../css/sub-posts.css'
import { useLocation, useNavigate, useParams } from "react-router"
import { useEffect } from "react"

export default function PostsList({ posts }) {

    const navigate = useNavigate()
    const location = useLocation().pathname

    useEffect(() => {

        if (posts === undefined) return null

    }, [posts])

    return (

        posts.map(post => {

            return (

                <div
                    key={post.id}
                    className="post-preview"
                >

                    <div
                        className="post-preview-text"
                        onClick={() => navigate(`${post.id}`)}
                    >
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