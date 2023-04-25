import React, { useRef, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase/getAuthDb'
import styled from 'styled-components'
import { GlobalContext } from '../providers/GlobalProvider'
import { lightBackgroundColor } from '../../sc-css/COLORS'
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

        <Container className={`${darkMode} drop-down-menu`}>

            <Form className={`${darkMode} drop-down-menu`}>

                <Header className='drop-down-menu'>Create a community</Header>

                <HR></HR>

                <p style={{ fontSize: "16px", margin: "4px 0", fontWeight: "500" }} className='drop-down-menu'>Name</p>

                <MenuSmallTitles style={{ paddingLeft: "0" }} className='drop-down-menu'
                >Beware, you can not change the name. <strong>Five</strong> characters minimum</MenuSmallTitles>

                <Input
                    className={`${darkMode} drop-down-menu`}
                    placeholder='r/'
                    ref={subName}
                    type='text' />

                {
                    error ?
                        <p className='drop-down-menu' style={{ fontSize: '0.8rem' }}>Please enter a name of 5 or more characters.</p>
                        : null
                }

                <LowerBanner className='drop-down-menu'>

                    <button className={`${darkMode} buttonStyle drop-down-menu`}
                        onClick={() => setMakeSub(false)}
                    >Cancel</button>

                    <button className={`${darkMode} buttonStyle drop-down-menu`}
                        onClick={() => {
                            handleCreateSub()
                        }}
                    >Create community</button>

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
    padding: 16px;
    border-radius:4px;
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
`

const LowerBanner = styled(HorizontalFlex)`
    justify-content:flex-end;
    background-color: #EDEFF1;
    padding: 16px;
`
