import { useNavigate } from "react-router"

export default function PostPreviewBody({ post, subId }) {

    const navigate = useNavigate()

    const handleClick = (e) => {
        if (e.target === undefined) return
        subId === null ? navigate(`p/${post.id}`) : navigate(`r/${subId}/p/${post.id}`)
    }
    
    return (

        <div
            className='mouse-pointer'
            onClick={handleClick}
        >

            <p>{post.data.title}</p>

        </div>
    )
}