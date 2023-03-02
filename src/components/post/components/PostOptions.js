import React from 'react'
import CommentsCount from '../../post-preview/CommentsCount'
import ShareButton from '../../reusables/ShareButton'
import Etcetera from '../../reusables/Etcetera'
import SaveButton from '../../reusables/SaveButton'

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
