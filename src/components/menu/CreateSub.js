import React, { useRef, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase/getAuthDb'
import styled from 'styled-components'
import { GlobalContext } from '../providers/GlobalProvider'
import { darkMain, darkTwo, lightBackgroundColor } from '../../sc-css/COLORS'
import { HR, HorizontalFlex, MenuSmallTitles } from '../../sc-css/atomic'

export default function CreateSub({ darkMode, setMakeSub, handleDisplay }) {

    const subName = useRef()
    const [error, setError] = useState(false)
    const { user } = useContext(GlobalContext)
    const navigate = useNavigate()

    async function handleCreateSub() {
        const name = subName.current.value
        if (name === '') {
            setError(true)
            return
        }

        const subId = await createSub(name, user.id)
        setMakeSub(false)
        handleDisplay()
        navigate(`r/${subId}/subSettings`)
    }

    return (

        <Container className={`${darkMode}`}>

            <Form className={`${darkMode}`}>

                <div style={{ padding: "16px" }}>
                    
                    <Header className=''>Create a community</Header>

                    <HR className={darkMode}></HR>
                    
                    <p style={{ fontSize: "16px", margin: "4px 0", fontWeight: "500" }} className=''>Name</p>

                    <MenuSmallTitles style={{ paddingLeft: "0" }} className=''
                    >Beware, you can not change the name. <strong>Five</strong> characters minimum</MenuSmallTitles>

                    <Input
                        className={`${darkMode} `}
                        placeholder='r/'
                        ref={subName}
                        type='text' />

                    {
                        error ?
                            <p className='' style={{ fontSize: '0.8rem' }}>Please enter a name of 5 or more characters.</p>
                            : null
                    }

                </div>

                <LowerBanner className={`${darkMode} `}>

                    <CancelButton className={`${darkMode} `}
                        onClick={() => setMakeSub(false)}
                    >Cancel</CancelButton>

                    <ConfirmButton className={`${darkMode} `}
                        onClick={() => { handleCreateSub() }}
                    >Create community</ConfirmButton>

                </LowerBanner>
            </Form>
        </Container>
    )
}

async function createSub(name, userId) {

    const subDoc = await addDoc(collection(db, 'subs'), {
        name: name,
        dateOfCreation: serverTimestamp(),
        creator: userId,
        description: '',
        users: []
    })
    return subDoc.id
}

const Container = styled.div`
    position: absolute;
    height: calc(100vh - 40px);
    width: 100vw;
    top: 47px;
    left: 0;
    background-color: rgb(28 28 28 / 90%);
    display: flex;
    align-items:center;
    justify-content:center;
    z-index: 100;   
`

const Form = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:center;
    background-color: ${lightBackgroundColor};
    border-radius:4px;

    &.dark {
        background-color: ${darkTwo};
        border: 1px solid #343536;
        box-shadow: 0 2px 20px 0 rgba(0,0,0,0.3);
    }
`

const Header = styled.h1`
    font-weight: 500;
    font-size: 16px;
    padding: 8px 0;
    margin:0 ;
`

const Input = styled.input`
    margin-top: 8px;
    margin-bottom: 8px;
    border-radius:4px;
    outline: none;
    border: 1px solid #EDEFF1;
    font-size:14px;
    padding: 10px 18px;
    width: 100%;
    box-sizing: border-box;
`

const LowerBanner = styled(HorizontalFlex)`
    justify-content:flex-end;
    background-color: #EDEFF1;
    padding: 16px;  
    min-width:100%;
    box-sizing:border-box;
    border-radius: 0 0 4px 4px;
    gap: 6px;

    &.dark {
        background-color: #343536;
    }
`

const Button = styled.button`
    border-radius: 50px;
    padding: 4px 16px;
    min-height:32px;
    font-weight:bold;
    border:none;
    font-size: 14px;
`

const CancelButton = styled(Button)`
    border: 1px solid #0079D3;
    color : #0079D3;
    position: relative;
    background-color: inherit;

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        border-radius:inherit;
        width: 100%;
        height: 100%;
        content:'';
        background-color: #0079D3;
        opacity: 0;
    }

    &:hover {
        cursor: pointer;
    }

    &:hover::before {
        opacity: 0.06;
    }

    &.dark {
        border: 1px solid #D7DADC;
        color: #D7DADC;
    }

    &.dark::before {
        background-color: #D7DADC;
    }
`

const ConfirmButton = styled(Button)`
    background-color: #0079D3;
    color : ${lightBackgroundColor};
    position: relative;

    &::before {
        position: absolute;
        top: 0;
        left: 0;
        border-radius:inherit;
        width: 100%;
        height: 100%;
        content:'';
        background-color: ${lightBackgroundColor};
        opacity: 0;
    }

    &:hover {
        cursor: pointer;
    }

    &:hover::before {
        opacity: 0.06;
    }

    &.dark {
        color: ${darkMain};
        background-color: #D7DADC;
    }

    &.dark::before {
        background-color: ${darkMain};
    }
`