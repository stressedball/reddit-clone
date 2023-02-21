import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import React, { useContext, useReducer, useRef, useState } from 'react'
import '../../css/create-post.css'
import { GlobalContext } from '../providers/GlobalProvider'
import { db } from '../../firebase/getAuthDb'

export default function CreatePost() {

    const { user, subs } = useContext(GlobalContext)
    const title = useRef()
    const text = useRef()
    const notified = useRef()
    const sub = useRef()
    const [error, setError] = useState(false)

    return (

        <div
            id='create-post-container'
        >

            <h4>Create Post</h4>

            <form
                id='create-post-form'
            >

                <div
                    style={{display:"flex"}}
                >
                    <select
                        ref={sub}
                        onChange={() => setError(false)}
                    >
                        <option
                        >Choose a sub</option>
                        {
                            subs ?
                                subs.map(sub => {
                                    return (
                                        <option
                                            key={sub.id}
                                            data-key={sub.id}
                                        >
                                            {sub.data.name}
                                        </option>
                                    )
                                }) : null
                        }
                    </select>

                    {
                        error ?
                            <p>please select a sub</p>
                            : null
                    }

                </div>


                <input
                    placeholder='Enter a title'
                    ref={title}
                    required={true}
                    type='text'
                ></input>

                <textarea
                    placeholder='say something (optional)'
                    ref={text}
                    type='text'
                ></textarea>

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
                        id='post'
                        onClick={(e) => {
                            const currentSub = sub.current.options[sub.current.selectedIndex].dataset.key

                            if (currentSub === undefined) setError(true)
                            if (title.current.value === '') return

                            handleSubmit(user, currentSub, title.current.value, text.current.value, notified.current.checked)
                        }}
                    >POST</button>

                </div>
            </form >


        </div >
    )
}


function handleSubmit(user, sub, title, text, notified) {

    return
    addDoc(collection(db, 'posts'), {
        title: title,
        text: text,
        poster: user.id,
        votes: 0
    })
}