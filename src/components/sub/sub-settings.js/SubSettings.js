import React, { useState, useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { db } from '../../../firebase/getAuthDb'
import { setDoc, doc } from 'firebase/firestore'
import { MainDiv, H2, Text } from './subSettingsStyle'
import { BottomButtonsDiv, ConfirmButton, HorizontalFlex, MainOutlet, TextArea, HR, CancelButton } from '../../../sc-css/atomic'
import { GlobalContext } from '../../providers/GlobalProvider'
import { ThemeContext } from '../../providers/ThemeProvider'
import AvatarSettings from './avatar-settings/AvatarSettings'
import BannerShortcut from './banner-settings/BannerShortcut'
import SideContent from '../../home/SideContent'
import SubSkin from './SubSkin'
import TopicSettings from './TopicSettings'

export default function SubSettings() {

    const navigate = useNavigate()
    const params = useParams()
    const { darkMode } = useContext(ThemeContext)
    const {user, subs } = useContext(GlobalContext)
    const [sub, setSub] = useState()
    const [description, setDescription] = useState('')
    const [isEnabled, setIsEnabled] = useState()

    useEffect(() => {
        if (!subs) return
        if (subs.filter(el => el.id === params.subId))
            setSub(() => subs.filter(sub => sub.id === params.subId)[0])
    }, [subs])

    useEffect(() => { if (sub) setDescription(sub.data.description) }, [sub])

    useEffect(() => {
        if (description !== '' && description !== sub.data.description) setIsEnabled('enabled')
        else setIsEnabled('')
    }, [description])

    if (!user) navigate('/reddit-clone/')
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

                <TopicSettings sub={sub} darkMode={darkMode} />

                <HR className={darkMode} />

                <div style={{ display: "flex", flexDirection: "column" }}>

                    <Text className='legend'>Change the sub description</Text>

                    <TextArea
                        className={`${darkMode}`}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></TextArea>

                    <BottomButtonsDiv className={darkMode}>
                        <CancelButton className={darkMode} onClick={() => setDescription(sub.data.description)}>Cancel</CancelButton>
                        <ConfirmButton onClick={() => handleDescriptionChange(description, sub)} className={`${darkMode} ${isEnabled}`}>Save Changes</ConfirmButton>
                    </BottomButtonsDiv>

                </div>

                <HR className={darkMode} />

                <BannerShortcut sub={sub} darkMode={darkMode} />

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

async function handleDescriptionChange(description, sub) {

    if (description === '') return

    const docRef = doc(db, 'subs', sub.id)
    await setDoc(docRef,
        { description: description },
        { merge: true })

}