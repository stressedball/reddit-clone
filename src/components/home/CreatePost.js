import React, { useContext } from 'react'
import '../../css/create-post.css'
import { GlobalContext } from '../providers/GlobalProvider'


export default function CreatePost() {

    const { subs } = useContext(GlobalContext)

    return (

        <div
            id='create-post-container'
        >

            <h4>Create Post</h4>

            <select>
                <option>Choose a sub</option>
                {
                    subs.map(sub => {
                        return (
                            <option
                                key={sub.id}
                            >
                                {sub.data.name}
                            </option>
                        )
                    })
                }
            </select>

            <input
                placeholder='Enter a title'
            ></input>

            <textarea
                placeholder='say something (optional)'
            ></textarea>

            <button
                id='post'
            >POST</button>

            <article
                id='post-notifications'
            >
                <input
                    type="checkbox"
                ></input>
                <p>Send notifications</p>
            </article>

        </div>
    )
}
