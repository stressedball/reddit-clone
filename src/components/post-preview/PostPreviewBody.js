import { useNavigate, useLocation } from "react-router"

export default function PostPreviewBody({ post, sub }) {

    const navigate = useNavigate()
    const location = useLocation().pathname.split('/')

    const handleClick = (e) => {
        if (e.target === undefined) return
    
        if (location[1] === 'r') navigate(`p/${post.id}`)
        else navigate(`r/${sub.id}/p/${post.id}`)
    }

    return (

        <div
            className='mouse-pointer'
            onClick={handleClick}
        >

            <p style={{ margin: "0" }}>{post.data.title}</p>

        </div>
    )
}