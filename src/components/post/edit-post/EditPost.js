import React, { useEffect, useState } from 'react'
import { BottomButtonsDiv, CancelButton, ConfirmButton, TextArea } from '../../../sc-css/atomic'
import {doc, setDoc } from 'firebase/firestore'
import { db } from '../../../firebase/getAuthDb'

export default function EditPost({ post, darkMode, handleEditPost }) {

  const [text, setText] = useState()
  const [enabled, setEnabled] = useState()

  useEffect(() => {
    if (!text || text === "" || text === post.data.text) setEnabled('')
    else setEnabled('enabled')
  }, [text])

  useEffect(() => { if (post) setText(post.data.text) }, [post])

  return (
    <>
      <TextArea className={darkMode} value={text} onChange={(e) => setText(e.target.value)} />

      <BottomButtonsDiv className={darkMode}>

        <CancelButton className={darkMode} onClick={() => handleEditPost()}>Cancel</CancelButton>

        <ConfirmButton onClick={() => editPost(post, text, handleEditPost)} className={`${darkMode} ${enabled}`}>Save</ConfirmButton>

      </BottomButtonsDiv>
    </>
  )
}

async function editPost(post, text, handleEditPost) {

  if (!text || text === '' || text === post.data.text) return

  try {
    await setDoc(doc(db, 'posts', post.id),
      { text: text },
      { merge: true })
    handleEditPost()
  } catch (error) {
    alert(error)
  }
}