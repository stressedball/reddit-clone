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
import SideContainer from './SideContainer';
import CreatePost from '../create-post/CreatePost'
import CreatePostShortcut from './create-post-shortcut/CreatePostShortcut';
import '../../css/container.css'

export default function Home() {

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
    <GlobalProvider>

      <Header darkMode={darkMode} handleDisplay={handleDisplay} />

      {location.split('/')[1] === 'r' && location.split('/').length <= 3 && <SubHeader darkMode={darkMode} />}

      <div id='container' className={`${containerClass}`}>

        {display ? <SideContainer darkMode={darkMode} /> : null}

        <div id='content-wrapper'>

          {location.split('/')[1] !== 'submit' && location.split('/').length <= 3 && <CreatePostShortcut darkMode={darkMode} />}

          <Routes>
            <Route path='/' index
              element={<MainPage darkMode={darkMode} handleDisplay={handleDisplay} />}
            />

            <Route path='/submit/*'
              element={<CreatePost darkMode={darkMode} handleDisplay={handleDisplay} />}
            />

            <Route path='r/:subId'
              element={<Sub darkMode={darkMode} handleDisplay={handleDisplay} />}
            />

            <Route path='r/:subId/subSettings'
              element={<SubSettings darkMode={darkMode} handleDisplay={handleDisplay} />}
            />

            <Route path='u/:userId'
              element={<UserSpace darkMode={darkMode} handleDisplay={handleDisplay} />}
            />

            <Route path='r/:subId/p/:postId'
              element={<Post darkMode={darkMode} handleDisplay={handleDisplay} />}
            />

          </Routes>
        </div>
      </div>
    </GlobalProvider>
  )
}
