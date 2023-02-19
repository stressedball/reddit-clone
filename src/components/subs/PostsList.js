import '../../css/sub-posts.css'
import { useContext, useEffect } from "react"
import { GlobalContext } from "../providers/GlobalProvider"
import PostPreview from "../post/PostPreview"

export default function PostsList({ subs }) {

    const { posts } = useContext(GlobalContext)

    useEffect(() => {

    }, [subs, posts])

    if (subs === undefined || posts === undefined) return null

    return subs.map(sub => {

        return sub.data.posts.map(postID => {

            const post = posts.filter(el => el.id === postID)[0]

            return (
                <PostPreview
                    key={post.id}
                    post={post}
                    sub={sub}
                />
            )

        })
    })

}