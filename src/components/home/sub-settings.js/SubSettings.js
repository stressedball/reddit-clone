import React, { useRef, useState, useContext, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { GlobalContext } from '../../providers/GlobalProvider'
import { db } from '../../../firebase/getAuthDb'
import { setDoc, doc } from 'firebase/firestore'


export default function SubSettings({ darkMode }) {

    const { subs } = useContext(GlobalContext)
    const [sub, setSub] = useState()
    const params = useParams()
    const descriptionRef = useRef()
    const [confirmSave, setConfirmSave] = useState(false)
    const [description, setDescription] = useState('')

    async function handleDescriptionChange() {

        if (descriptionRef.current.value === '') return

        const docRef = doc(db, 'subs', sub.id)
        await setDoc(docRef, {
            description: descriptionRef.current.value
        }, { merge: true })

        setConfirmSave(true)

        setTimeout(() => {
            setConfirmSave(false)
        }, [2000])
    }

    useEffect(() => {

        if (subs !== undefined) setSub(() => subs.filter(sub => sub.id === params.subId)[0])

    }, [subs])


    useEffect(() => {

        if (sub !== undefined) setDescription(sub.data.description)

    }, [sub])

    if (sub === undefined) return <div>Loading Sub settings</div>

    return (
        <div>

            <h4>{sub.data.name}</h4>

            <p>Created : {sub.data.dateOfCreation.toDate().toDateString()}</p>

            <div>

                <p>You can change the sub description</p>

                <textarea
                    className={`${darkMode}`}
                    ref={descriptionRef}
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }}
                ></textarea>

                <div>
                    <button onClick={handleDescriptionChange} className={`${darkMode} buttonStyle`}>Save Changes</button>
                    {
                        confirmSave ?
                            <p>Changes saved!</p>
                            : null
                    }
                </div>
            </div>

            <div>
                <p>Users</p>
            </div>
        </div>

    )
}
