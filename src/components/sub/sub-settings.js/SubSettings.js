import React, { useRef, useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../../firebase/getAuthDb'
import { setDoc, doc } from 'firebase/firestore'
import { MainDiv, H2, Text } from './subSettingsStyle'
import { BottomButtonsDiv, ConfirmButton, HorizontalFlex, MainOutlet, TextArea, HR } from '../../../sc-css/atomic'
import { GlobalContext } from '../../providers/GlobalProvider'
import { ThemeContext } from '../../providers/ThemeProvider'
import AvatarSettings from './avatar-settings/AvatarSettings'
import BannerSettings from './banner-settings/BannerSettings'
import SideContent from '../../home/SideContent'
import SubSkin from './SubSkin'

export default function SubSettings() {

    const { darkMode } = useContext(ThemeContext)
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
        if (subs) {
            if (subs.filter(el => el.id === params.subId)) setSub(() => subs.filter(sub => sub.id === params.subId)[0])
        }
    }, [subs])

    useEffect(() => { if (sub) setDescription(sub.data.description) }, [sub])

    if (!sub) return <div>Loading Sub settings</div>

    return (

        <MainOutlet>
            <MainDiv className={darkMode}>

                <HorizontalFlex style={{ alignItems: "baseline" }}>
                    <H2>r/{sub.data.name}</H2>
                    <Text>&middot;</Text>
                    <Text className='bold'>Created {sub.data.dateOfCreation.toDate().toDateString()}</Text>
                </HorizontalFlex>

                <HR className={darkMode} />

                <AvatarSettings sub={sub} darkMode={darkMode} />

                <HR className={darkMode} />
                
                <div style={{ display: "flex", flexDirection: "column" }}>

                    <Text className='legend'>Change the sub description</Text>

                    <TextArea
                        className={`${darkMode}`}
                        ref={descriptionRef}
                        value={description}
                        onChange={(e) => { setDescription(e.target.value) }}
                    ></TextArea>

                    <BottomButtonsDiv className={darkMode}>
                        <ConfirmButton onClick={handleDescriptionChange} className={`${darkMode}`}>Save Changes</ConfirmButton>
                        {
                            confirmSave ?
                                <p>Changes saved!</p>
                                : null
                        }
                    </BottomButtonsDiv>

                </div>

                <HR className={darkMode} />
                
                <BannerSettings sub={sub} darkMode={darkMode} />

                <HR className={darkMode} />

                <Text className='legend'>Change the sub skin</Text>

                <SubSkin darkMode={darkMode} sub={sub} />

                <HR className={darkMode} />
                
                <div>
                    <Text className='legend'>Users</Text>

                    <UsersList sub={sub} />

                </div>

            </MainDiv>

            <SideContent />

        </MainOutlet>

    )
}

function UsersList({ sub }) {
    const { users } = useContext(GlobalContext)
    const [members, setMembers] = useState()

    useEffect(() => {
        if (users) setMembers(users.filter(user => sub.data.users.includes(user.id)))
    }, [users])

    if (!members) return

    return (
        members.map(member => {
            return (
                <p key={member.id}>{member.data.userName}</p>
            )
        })
    )
}