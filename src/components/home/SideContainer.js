import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { GlobalContext } from '../providers/GlobalProvider'

export default function SideContainer({ darkMode }) {

  const location = useLocation().pathname
  const [content, setContent] = useState()

  useEffect(() => {

    if (location === '/') setContent(<Home darkMode={darkMode} />)

    if (location.split('/')[1] === 'r') setContent(<Sub darkMode={darkMode} subId={location.split('/')[2]} />)

  }, [location])


  return (
    <>
      {content}
    </>
  )
}


function Home({ darkMode }) {
  return (
    <div id='side-container' className={`${darkMode}`}>
      <h4>Welcome to RedditClone</h4>
      <p>I did my best to offer as much functionalities as the real deal.</p>
      <p>Create new communities.</p>
      <p>Share your interests by posting new subjects.</p>
      <p>Like or dislike a post.</p>
    </div>
  )
}

function Sub({ darkMode, subId }) {

  const { subs } = useContext(GlobalContext)
  const [sub, setSub] = useState()

  useEffect(() => {

    if (subs !== undefined) {
      setSub(subs.filter(sub => sub.id === subId)[0])
    }

  }, [subs, subId])

  if (sub === undefined) return <div>Loading</div>

  return (
    <div id='side-container' className={`${darkMode}`}>
      <p>Welcome to <strong>{sub.data.name}</strong></p>
      <p>{sub.data.description}</p>
      <p>Created {sub.data.dateOfCreation.toDate().toDateString()}</p>
      <p>{sub.data.users.length} members</p>
    </div>
  )
}