import React, { useRef, useState, useContext, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { GlobalContext } from '../../providers/GlobalProvider'
import { db } from '../../../firebase/getAuthDb'
import { setDoc, doc } from 'firebase/firestore'
import AvatarSettings from './avatar-settings/AvatarSettings'
import BannerSettings from './banner-settings/BannerSettings'

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
        if (subs !== undefined) {
            if (subs.filter(el => el.id === params.subId)) setSub(() => subs.filter(sub => sub.id === params.subId)[0])

        }
    }, [subs])


    useEffect(() => {

        if (sub !== undefined) setDescription(sub.data.description)

    }, [sub])

    if (sub === undefined) return <div>Loading Sub settings</div>

    return (

        <div className='flex vertical' style={{ gap: "1rem", padding:"2rem"}}>

            <div className='flex horizontal' style={{ gap: "1rem" }}>
                <AvatarSettings sub={sub} darkMode={darkMode} />
                <h4>{sub.data.name}</h4>
                {
                    sub.data.dateOfCreation ?
                    <p>Created : {sub.data.dateOfCreation.toDate().toDateString()}</p>
                    : null
                }
            </div>


            <div>

                <p>Sub description</p>

                <textarea
                    style={{ width: "80%", height: "100px" }}
                    className={`${darkMode}`}
                    ref={descriptionRef}
                    value={description}
                    onChange={(e) => { setDescription(e.target.value) }}
                ></textarea>

            </div>

            <div>
                <button onClick={handleDescriptionChange} className={`${darkMode} buttonStyle mouse-pointer`}>Save Changes</button>
                {
                    confirmSave ?
                        <p>Changes saved!</p>
                        : null
                }
            </div>

            <BannerSettings sub={sub} darkMode={darkMode} />

            <div>
                <p>Users</p>
            </div>
        </div>

    )
}
