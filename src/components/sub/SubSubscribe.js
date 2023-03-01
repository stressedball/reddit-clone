import React from 'react'
import { db } from '../../firebase/getAuthDb'
import { setDoc, doc, arrayUnion } from 'firebase/firestore'

export default function SubSubscribe({ darkMode, sub, user }) {

  return (
    <button onClick={
      async () => {
        await handleSub(sub, user)
      }}
      className={`${darkMode} buttonStyle mouse-pointer`}>Join sub</button>
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