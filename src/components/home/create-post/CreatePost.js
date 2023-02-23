import '../../../css/create-post.css'
import { db } from '../../../firebase/getAuthDb'
import { GlobalContext } from '../../providers/GlobalProvider'
import DropDownSub from './DropDownSub'
import { addDoc, arrayUnion, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from './NavBar'
import { ThemeContext } from '../../providers/ThemeProvider'

export default function CreatePost() {

    const { darkMode } = useContext(ThemeContext)
    const { user, subs } = useContext(GlobalContext)
    const title = useRef()
    const text = useRef()
    const notified = useRef()
    const [sub, setSub] = useState('null')
    const [error, setError] = useState(false)
    const params = useParams()['*']
    const [container, setContainer] = useState()
    const navigate = useNavigate()

    useEffect(() => {
        if (params === '') {
            setContainer(
                <textarea
                    className={`${darkMode}`}
                    placeholder='say something (optional)'
                    ref={text}
                    type='text'
                ></textarea>
            )
        }

        if (params === 'img') {
            setContainer(
                <p>Add image</p>
            )
        }

        if (params === 'poll') {
            setContainer(
                <p>Add Poll</p>
            )
        }

    }, [params, darkMode])


    return (

        <div
            id='create-post-container'
        >

            <h4>Create Post</h4>

            <form
                id='create-post-form'
            >

                <DropDownSub
                    error={error}
                    setError={setError}
                    setSub={setSub}
                    sub={sub}
                    subs={subs}
                    darkMode={darkMode}
                />

                <NavBar />


                <input
                    className={`${darkMode}`}
                    placeholder='Enter a title'
                    ref={title}
                    required={true}
                    type='text'
                ></input>

                {
                    <div
                        
                    >
                        {container}
                    </div>
                }

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
                        className={`${darkMode} buttonStyle mouse-pointer`}
                        id='post'
                        onClick={(e) => {
                            if (sub === 'null') {
                                setError(true)
                                e.preventDefault()
                                return
                            }
                            if (title.current.value === '') return
                            e.preventDefault()

                            handleSubmit(user, sub, title.current.value, text.current.value, notified.current.checked)

                            navigate(`r/${sub}`)
                        }}
                    >POST</button>

                </div>
            </form >
        </div >
    )
}


async function handleSubmit(user, sub, title, text, notified) {

    const postRef = await addDoc(collection(db, 'posts'), {
        title: title,
        text: text,
        poster: user.id,
        votes: 0,
        timeStamp: serverTimestamp(),
        parentSub: sub
    })

    updateDoc(doc(db, 'subs', sub), {
        posts: arrayUnion(postRef.id)
    })
}