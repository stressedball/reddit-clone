import { GlobalContext } from '../providers/GlobalProvider'
import DropDownSub from './DropDownSub'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from './NavBar'
import CreatePostOptions from './CreatePostOptions'
import styled from 'styled-components'
import { darkBorder, darkTwo, lightBackgroundColor, lightBorder } from '../../sc-css/COLORS'
import { ThemeContext } from '../providers/ThemeProvider'
import { MainOutlet, TextArea } from '../../sc-css/atomic'
import SideContent from '../home/SideContent'

export default function CreatePost() {

    const { darkMode } = useContext(ThemeContext)
    const { subs } = useContext(GlobalContext)
    const params = useParams()
    const [error, setError] = useState(false)
    const [subId, setSubId] = useState(null)
    const [defaultSub, setDefaultSub] = useState()
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')
    const notified = useRef()
    const [image, setImage] = useState(null)

    const changeSub = (subId) => { setSubId(subId) }

    useEffect(() => {
        if (params.subId && subs) setDefaultSub(subs.filter(sub => sub.id === params.subId)[0])
    }, [params, subs])

    return (
        <MainOutlet style={{ justifyContent: "center" }}>
            <Container >

                <CreatePostStyled className={`${darkMode}`}>
                    <p>Create Post</p>
                </CreatePostStyled>

                <DropDownSub defaultSub={defaultSub} error={error} setError={setError} changeSub={changeSub} subs={subs} darkMode={darkMode} />

                <Form className={`${darkMode}`}>

                    <NavBar darkMode={darkMode} />

                    <div style={{ margin: "16px" }}>

                        <Input className={`${darkMode}`} value={title} onChange={(e) => setTitle(e.target.value)} required={true} placeholder='Title' type='text' />

                        {
                            <div>
                                {params["*"] === '' ? <TextContainer text={text} darkMode={darkMode} setText={setText} /> : null}
                                {params["*"] === 'img' ? <ImageContainer darkMode={darkMode} setImage={setImage} /> : null}
                                {params["*"] === 'poll' ? <PollContainer darkMode={darkMode} /> : null}
                            </div>
                        }
                    </div>

                    <CreatePostOptions notified={notified} darkMode={darkMode}
                        subId={subId} title={title} text={text} setError={setError}
                        image={image}
                    />

                </Form >
            </Container >
            <SideContent />
        </MainOutlet>
    )
}


// border:1px solid #EDEFF1;

function TextContainer({ darkMode, text, setText }) {
    return (
        <TextArea
            className={`${darkMode} whole`}
            placeholder='Text (required)'
            value={text}
            onChange={(e) => setText(e.target.value)}
            type='text'
            style={{  marginBottom: "8px" }}
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

const Container = styled.div`
    max-width: 740px;
    width:100%;
    margin:auto;
    border-radius:4px;
`

const CreatePostStyled = styled.div`
    font-size: 18px;
    font-weight:500;
    border-bottom : 1px solid ${lightBackgroundColor};
    margin: 16px 0; 

    &.dark {
        border-bottom : 1px solid ${lightBorder};   
    }
`

const Form = styled.form`
    background-color: ${lightBackgroundColor};
    border-radius:4px;
    border: 1px solid ${lightBorder};

    &.dark{
        background-color: ${darkTwo};
        border: 1px solid ${darkBorder};
    }
`

const Input = styled.input`
    width: 100%;
    box-sizing:border-box;
    height: 39px;
    border:1px solid #EDEFF1;
    margin-bottom: 8px;
    border-radius: 4px;
    padding: 8px 16px;

    &.dark {
        border: 1px solid ${darkBorder};
        background-color: ${darkTwo};
        color:inherit;
    }

    &:focus {
        outline: 1px solid black;
        border: none;
    }

    &.dark:focus {
        border: 1px solid ${lightBorder};
    }
`