import React from 'react'
import CommentsCount from '../../multi-usage/CommentsCount'
import ShareButton from '../../multi-usage/ShareButton'
import Etcetera from './Etcetera'
import SaveButton from '../../multi-usage/SaveButton'
import { HorizontalFlex } from '../../../sc-css/atomic'

export default function DefaultOptions({ user, post, darkMode, comments }) {
  return (
    <div >
      <HorizontalFlex style={{ gap: "4px" }}>
        <CommentsCount comments={comments} darkMode={darkMode} />
        <ShareButton darkMode={darkMode} />
        <SaveButton darkMode={darkMode} user={user} post={post} />
        <Etcetera darkMode={darkMode} post={post} user={user} />
      </HorizontalFlex>
    </div>
  )
}
