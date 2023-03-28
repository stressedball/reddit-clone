import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { GlobalContext } from '../providers/GlobalProvider'
import styled from 'styled-components'
import { lightBorder, lightBackgroundColor } from '../../sc-css/COLORS'
import { ThemeContext } from '../providers/ThemeProvider'

const StyledSideContent = styled.div`
  min-width: 312px;
  width:312px;
  border: 1px solid ${lightBorder};
  background-color: ${lightBackgroundColor};
  font-size:14px;
  padding : 0 8px 0 8px;
  border-box: box-sizing;
  height: fit-content;
  border-radius:4px;
  margin-left:24px;

  &.dark {
    background-color: #1a1a1b;
  }
`

export default function SideContent() {

  const location = useLocation().pathname
  const [content, setContent] = useState()
  const {darkMode} = useContext(ThemeContext)

  useEffect(() => {

    if (location === '/')
      setContent(<Home darkMode={darkMode} />)

    if (location.split('/')[1] === 'r')
      setContent(<Sub darkMode={darkMode} subId={location.split('/')[2]} />)

    if (location === '/submit')
      setContent(<Submit />)
  }, [location])


  return (
    <StyledSideContent className={`${darkMode}`}>
      {content}
    </StyledSideContent>
  )
}


function Home() {
  return (
    <>
      <h4>Welcome to RedditClone</h4>
      <p>I did my best to offer as much functionalities as the real deal.</p>
      <p>Create new communities.</p>
      <p>Share your interests by posting new subjects.</p>
      <p>Like or dislike a post.</p>
      <footer>Brought to you by TS</footer>
    </>
  )
}

function Sub({ subId }) {

  const { subs } = useContext(GlobalContext)
  const [sub, setSub] = useState()

  useEffect(() => {
    if (subs !== undefined) {
      setSub(subs.filter(sub => sub.id === subId)[0])
    }
  }, [subs, subId])

  if (sub === undefined) return <div>Loading</div>

  return (
    <>
      <p>Welcome to <strong>{sub.data.name}</strong></p>
      <p>{sub.data.description}</p>
      <p>Created {sub.data.dateOfCreation.toDate().toDateString()}</p>
      <p>{sub.data.users.length} members</p>
    </>
  )
}

function Submit() {
  return (
    <>
      <h4>Posting to RedditClone</h4>
      <p>Just remember to be civil.</p>
      <p>Behave like you would in real life.</p>
      <p>Have fun!</p>
    </>
  )
}