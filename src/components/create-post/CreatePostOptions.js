import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { GlobalContext } from '../providers/GlobalProvider'
import handleSubmit from './handleSubmit'

export default function CreatePostOptions({ notified, darkMode, setError, subId, title, text, image }) {

    const params = useParams()['*']
    const navigate = useNavigate()
    const { user } = useContext(GlobalContext)

    async function handlePostCreate() {

        const post = {params : params, user : user, subId : subId, title : title, text: text, image : image, notified :notified}

        const postId = await handleSubmit(post)

        navigate(`/r/${subId}/p/${postId}`)
    }

    return (
        <div
            id='create-post-options'
        >

            <div
                id='post-notifications'
            >
                <input
                    type="checkbox"
                    ref={notified}
                ></input>
                <p>Send notifications</p>
            </div>

            <button
                className={`${darkMode} buttonStyle mouse-pointer`} id='post'
                onClick={(e) => {

                    if (subId === 'null') {
                        setError(true)
                        e.preventDefault()
                        return
                    }

                    if (title.current.value === '') return

                    e.preventDefault()

                    handlePostCreate()
                }}
            >POST</button>

        </div>
    )
}


