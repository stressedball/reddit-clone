import React from 'react'
import { db } from '../../firebase/getAuthDb'
import { setDoc, doc, arrayUnion, arrayRemove, updateDoc } from 'firebase/firestore'
import styled from 'styled-components'
import { lightBorder } from '../../sc-css/COLORS'


export default function SubSubscribe({ darkMode, sub, user }) {

  if (!user || !sub) return null

  if (sub.data.users.filter(e => e === user.id).length > 0) {
    return (
      <Button
        onMouseEnter={e => e.target.textContent = "Leave"} onMouseLeave={e => e.target.textContent = "Joined"}
        onClick={async () => await handleUnSub(sub, user)} className={`${darkMode} joined`}>Joined</Button>
    )
  }

  return (
    <Button onClick={async () => { await handleSub(sub, user) }} className={`${darkMode} join`}>Join</Button>
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

const Button = styled.button`
  width:96px;
  border:1px solid #4a96c4;
  font-size:14px;
  font-weight:700;
  height:32px;
  border-radius:14px;
  background-color: inherit;
  position:relative;
  
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

  &.join:hover::before {
    background:#ffffff;
    opacity: 0.08;
  }

  &.joined:hover::before {
    opacity: 0.04;
    background-color:#4a96c4;
  }

  &.join {
    background-color: #4a96c4;
    color: #ffffff;
  }

  &.joined {
    background-color:inherit;
    color: #4a96c4;
  }

  &.dark.join {
    background-color: #d7dadc;
    color: #1a1a1b;
  }

  &:hover {
    cursor:pointer;
  }

  &.dark {
    color: inherit;
    border: 1px solid ${lightBorder};
  }

`