import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useState, useContext, useEffect } from 'react'
import { GlobalProvider } from '../providers/GlobalProvider';
import Header from '../header/Header'
import Post from '../post/Post'
import MainPage from './MainPage'
import UserSpace from './UserSpace';
import { ThemeContext } from '../providers/ThemeProvider';
import SubSettings from '../sub/sub-settings.js/SubSettings';
import Sub from '../sub/Sub'
import SubHeader from '../sub/SubHeader';
import SideContainer from './SideContent';
import CreatePost from '../create-post/CreatePost'
// import '../../css/container.css'
import CreatePostShortcut from '../create-post-shortcut/CreatePostShortcut';

export default function Home({ userId }) {

  const location = useLocation().pathname
  const { darkMode } = useContext(ThemeContext)
  const [containerClass, setContainerClass] = useState()
  const [display, setDisplay] = useState(false)

  const handleDisplay = (bool) => {
    if (bool) {
      setContainerClass('grid')
      setDisplay(true)
    } else {
      setContainerClass()
      setDisplay(false)
    }
  }

  useEffect(() => {
    if (location.split('/')[1] === 'r' && location.split('/').length < 3) setDisplay(true)
  }, [location])

  return (

    <div id='container' className={`${containerClass}`}>

      <Header userId={userId} userName={null} />
      {display ? <SideContainer darkMode={darkMode} /> : null}

      <div id='content-wrapper'>


        {userId && location.split('/')[1] !== 'submit' && location.split('/').length <= 3 && <CreatePostShortcut darkMode={darkMode} />}

      </div>
    </div>
  )
}

{/* <Header darkMode={darkMode} handleDisplay={handleDisplay} /> */ }

      // {location.split('/')[1] === 'r' && location.split('/').length <= 3 && <SubHeader darkMode={darkMode} />}