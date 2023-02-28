import '../../css/create-post.css'
import { GlobalContext } from '../providers/GlobalProvider'
import DropDownSub from './DropDownSub'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './NavBar'
import CreatePostOptions from './CreatePostOptions'

export default function CreatePost({ darkMode, handleDisplay }) {

    useEffect(() => { handleDisplay(false) }, [])

    const { subs } = useContext(GlobalContext)
    const params = useParams()['*']
    const [error, setError] = useState(false)
    const [subId, setSubId] = useState('null')

    const title = useRef()
    const text = useRef()
    const notified = useRef()
    const [image, setImage] = useState(null)

    const changeSub = (subId) => {
        setSubId(subId)
    }

    return (

        <div
            className='replace-container'
            id='create-post-container'
        >

            <h4>Create Post</h4>

            <form
                id='create-post-form'
            >

                <DropDownSub
                    error={error}
                    setError={setError}
                    changeSub={changeSub}
                    subs={subs}
                    darkMode={darkMode}
                />

                <NavBar darkMode={darkMode} />

                <input
                    className={`${darkMode}`} ref={title} required={true}
                    placeholder='Enter a title' type='text'
                ></input>

                {
                    <div id='create-post-content-container'>
                        {
                            params === '' ? <TextContainer text={text} darkMode={darkMode} /> : null
                        }
                        {
                            params === 'img' ? <ImageContainer darkMode={darkMode} setImage={setImage} /> : null
                        }
                        {
                            params === 'poll' ? <PollContainer darkMode={darkMode} /> : null
                        }
                    </div>
                }


                <CreatePostOptions notified={notified} darkMode={darkMode}
                    subId={subId} title={title} text={text} setError={setError}
                    image={image}
                />

            </form >
        </div >
    )
}

function TextContainer({ darkMode, text }) {
    return (
        <textarea
            className={`${darkMode}`}
            placeholder='say something (optional)'
            ref={text}
            type='text'
        ></textarea>
    )
}

function ImageContainer({ darkMode, setImage }) {

    const handleImage = (e) => {
        setImage(e.target.files[0])
    }

    return (

        <input
            onChange={handleImage}
            type="file"
            className={`${darkMode} mouse-pointer`}
        ></input>
    )
}

function PollContainer({ darkMode }) {
    return (
        <p>Poll thingy</p>
    )
}