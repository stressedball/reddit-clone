import React from 'react'
import { db } from '../../firebase/getAuthDb'
import { setDoc, doc, arrayUnion, arrayRemove, updateDoc } from 'firebase/firestore'
import styled from 'styled-components'

const Button = styled.button`
  width:96px;
  border:1px solid #4a96c4;
  color:#4a96c4;
  font-size:14px;
  font-weight:700;
  height:32px;
  border-radius:14px;

  &:hover {
    cursor:pointer;
  }
`

export default function SubSubscribe({ darkMode, sub, user }) {

  if (sub.data.users.filter(e => e === user.id).length > 0) {
    return (
      <Button onClick={async () => await handleUnSub(sub, user)} className={`${darkMode}`}>Leave</Button>
    )
  }

  return (
    <Button onClick={async () => { await handleSub(sub, user) }} className={`${darkMode}`}>Join sub</Button>
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
    console.log(error)
  }
}