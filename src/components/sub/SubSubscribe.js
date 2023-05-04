import { useContext } from 'react'
import { db } from '../../firebase/getAuthDb'
import { setDoc, doc, arrayUnion, arrayRemove, updateDoc } from 'firebase/firestore'
import styled from 'styled-components'
import { darkButton, lightBorder, darkTwo } from '../../sc-css/COLORS'
import { ThemeContext } from '../providers/ThemeProvider'


export default function SubSubscribe({ sub, user }) {

  const { darkMode } = useContext(ThemeContext)

  if (!user || !sub) return null

  if (sub.data.users.filter(e => e === user.id).length > 0) {
    return (
      <ButtonJoined skin={sub.data.skin} darkMode={darkMode}
        onMouseEnter={e => e.target.textContent = "Leave"}
        onMouseLeave={e => e.target.textContent = "Joined"}
        onClick={async () => await handleUnSub(sub, user)} >Joined</ButtonJoined>
    )
  }

  return (
    <ButtonJoin skin={sub.data.skin} darkMode={darkMode}
      onClick={async () => { await handleSub(sub, user) }}>Join</ButtonJoin>
  )
}

async function handleSub(sub, user) {
  try {
    await setDoc(doc(db, 'users', user.id), {
      subscribedSubs: arrayUnion(sub.id)
    }, { merge: true })
    await setDoc(doc(db, 'subs', sub.id), {
      users: arrayUnion(user.id)
    }, { merge: true })

  } catch (error) {
    alert('Subscription to sub failed. Please try again.')
  }
}

async function handleUnSub(sub, user) {
  try {
    await updateDoc(doc(db, 'users', user.id), {
      subscribedSubs: arrayRemove(sub.id)
    }, { merge: true })
    await updateDoc(doc(db, 'subs', sub.id), {
      users: arrayRemove(user.id)
    }, { merge: true })

  } catch (error) {
    alert('Subscription to sub failed. Please try again.')
  }
}

const Button = styled.button`
  width:96px;
  font-size:14px;
  font-weight:700;
  height:32px;
  border-radius:14px;
  position:relative;
  border: 1px solid;

  &::before {
    content:'';
    position : absolute;
    height:100%;
    width:100%;
    top:0;
    left:0;
    border-radius:14px;
    opacity:0;
  }

  &:hover {
    cursor:pointer;
  }
`

const ButtonJoined = styled(Button)`
  color: ${props => props.darkMode === 'dark' ? 'inherit' : '#ffffff'};
  background-color: ${props => props.darkMode === 'dark' ? 'inherit' : props.skin};
  border-color: ${props => props.darkMode === 'dark'? `${lightBorder}` : props.skin };

  &:hover::before {
    opacity: 0.04;
    background-color:#4a96c4;
  }
`

const ButtonJoin = styled(Button)`
  background-color: ${props => props.darkMode === "dark" ? `${darkButton}` : props.skin};
  color: ${props => props.darkMode === "dark" ? `${darkTwo}` : '#ffffff'};

  &:hover::before {
    background:#ffffff;
    opacity: 0.08;
  }
`