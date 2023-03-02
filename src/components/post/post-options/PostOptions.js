import React from 'react'
import CommentsCount from '../../multi-usage/CommentsCount'
import ShareButton from '../../multi-usage/ShareButton'
import Etcetera from './Etcetera'
import SaveButton from '../../multi-usage/SaveButton'

export default function DefaultOptions({ user, post, darkMode, comments }) {


  return (
    <div >
      <div className='flex horizontal' style={{ gap: "4px" }}>
        <CommentsCount comments={comments} darkMode={darkMode} />
        <ShareButton darkMode={darkMode} />
        <SaveButton darkMode={darkMode} user={user} post={post} />
        <Etcetera darkMode={darkMode} post={post} user={user} />
      </div>
    </div>
  )
}
