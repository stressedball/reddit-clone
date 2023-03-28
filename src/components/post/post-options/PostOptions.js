import React from 'react'
import CommentsCount from '../../multi-usage/CommentsCount'
import ShareButton from '../../multi-usage/ShareButton'
import Etcetera from './Etcetera'
import SaveButton from '../../multi-usage/SaveButton'
import { HorizontalFlex } from '../../../sc-css/atomic'
import styled from 'styled-components'

const StyledDiv = styled(HorizontalFlex)`
  gap:4px;
  font-size:12px;
  font-weight:700;
  color: rgb(135, 138, 140);
`

export default function DefaultOptions({ user, post, darkMode, comments }) {
  return (
    <StyledDiv>
      <CommentsCount comments={comments} darkMode={darkMode} />
      <ShareButton darkMode={darkMode} />
      <SaveButton darkMode={darkMode} user={user} post={post} />
      <Etcetera darkMode={darkMode} post={post} user={user} />
    </StyledDiv>
  )
}
