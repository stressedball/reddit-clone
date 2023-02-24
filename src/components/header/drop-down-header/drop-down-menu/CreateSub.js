import React, { useRef, useState, useContext } from 'react'
import '../../../../css/create-sub.css'
import { GlobalContext } from '../../../providers/GlobalProvider'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection, setDoc } from 'firebase/firestore'
import { db } from '../../../../firebase/getAuthDb'

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

        <div id='create-sub' className={`${darkMode}`}>

            <div id='create-sub-form'>

                <header>Create a community</header>

                <p>Name</p>

                <p style={{ fontSize: '0.8rem' }}>Beware, you can not change the name. <span style={{ fontSize: '0.7rem' }}><strong>Five</strong> characters minimum</span></p>

                <input
                    id='create-sub-input'
                    placeholder='r/'
                    ref={subName}
                    type='text'
                ></input>

                {
                    error ?
                        <p style={{ fontSize: '0.8rem' }}>Please enter a name of 5 or more characters.</p>
                        : null
                }

                <div id='buttons-container'>

                    <button className={`${darkMode} buttonStyle`}
                        onClick={() => setMakeSub(false)}
                    >Cancel</button>

                    <button className={`${darkMode} buttonStyle`}
                        onClick={() => {
                            handleCreateSub()
                        }}
                    >Create community</button>

                </div>
            </div>
        </div>
    )
}

async function createSub(name, userId) {

    const subDoc = await addDoc(collection(db, 'subs'), {
        name: name,
        creator: userId,
        description: '',
        users: []
    })
    return subDoc.id
}