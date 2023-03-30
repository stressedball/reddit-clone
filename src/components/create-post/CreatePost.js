import { GlobalContext } from '../providers/GlobalProvider'
import DropDownSub from './DropDownSub'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './NavBar'
import CreatePostOptions from './CreatePostOptions'
import styled from 'styled-components'
import { darkTwo, lightBackgroundColor, lightBorder } from '../../sc-css/COLORS'
import { ThemeContext } from '../providers/ThemeProvider'

const Container = styled.div`
    max-width: 740px;
    width:100%;
    margin:auto;
    border-radius:4px;
`

const CreatePostStyled = styled.div`
    font-size: 18px;
    font-wight:500;
    border-bottom : 1px solid ${lightBackgroundColor};
    margin: 16px 0; 

    &.dark {
        border-bottom : 1px solid ${lightBorder};   
    }
`

const Form = styled.form`
    background-color: ${lightBackgroundColor};
    border-radius:4px;

    &.dark{
        background-color: ${darkTwo};
    }
`

const Input = styled.input`
    width: 100%;
    box-sizing:border-box;
    height: 39px;
    border:1px solid ${lightBorder};
    margin-bottom: 8px;

    &.dark {
        background-color: ${darkTwo};
    }
`

export default function CreatePost() {

    const { darkMode } = useContext(ThemeContext)
    const { subs } = useContext(GlobalContext)
    const params = useParams()['*']
    const [error, setError] = useState(false)
    const [subId, setSubId] = useState('null')

    const [title, setTitle] = useState()
    const [text, setText] = useState()
    const notified = useRef()
    const [image, setImage] = useState(null)

    const changeSub = (subId) => { setSubId(subId) }

    useEffect(() => {
        document.querySelector('#div-styled-query').style.width = '690px';
        return () => document.querySelector('#div-styled-query').style.width = '100%';
    }, [])

    console.log(params)
    return (

        <Container >

            <CreatePostStyled className={`${darkMode}`}>
                <p>Create Post</p>
            </CreatePostStyled>

            <DropDownSub error={error} setError={setError} changeSub={changeSub} subs={subs}
                darkMode={darkMode} />

            <Form className={`${darkMode}`}>

                <NavBar darkMode={darkMode} />

                <div style={{ margin: "16px" }}>

                    <Input className={`${darkMode}`} value={title} onChange={(e) => setTitle(e.target.value)} required={true} placeholder='Enter a title' type='text' />

                    {
                        <div>
                            {params === '' ? <TextContainer text={text} darkMode={darkMode} setText={setText} /> : null}
                            {params === 'img' ? <ImageContainer darkMode={darkMode} setImage={setImage} /> : null}
                            {params === 'poll' ? <PollContainer darkMode={darkMode} /> : null}
                        </div>
                    }
                </div>

                <CreatePostOptions notified={notified} darkMode={darkMode}
                    subId={subId} title={title} text={text} setError={setError}
                    image={image}
                />

            </Form >
        </Container >
    )
}

const TextArea = styled.textarea`
    width: 100%;
    box-sizing:border-box;
    resize:vertical;
    border-radius:4px;
    border:1px solid ${lightBorder};
    margin-bottom: 8px;
    min-height:122px;

    &.dark {
        background-color: ${darkTwo};
    }
`

function TextContainer({ darkMode, text, setText }) {
    return (
        <TextArea
            className={`${darkMode}`}
            placeholder='say something (optional)'
            value={text}
            onChange={(e) => setText(e.target.value)}
            type='text'
        ></TextArea>
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