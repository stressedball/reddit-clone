import CreatePost from './create-post/CreatePost';
import CreatePostShortcut from './create-post-shortcut/CreatePostShortcut';
import { GlobalProvider } from '../providers/GlobalProvider';
import Header from '../header/Header'
import Post from '../post/Post'
import Sub from './Sub'
import MainPage from './MainPage'
import UserSpace from './UserSpace';
import React, { useContext } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import { ThemeContext } from '../providers/ThemeProvider';
import SubSettings from './sub-settings.js/SubSettings';

export default function Home() {

  const location = useLocation().pathname
  const { darkMode } = useContext(ThemeContext)

  return (
    <GlobalProvider>

      <Header darkMode={darkMode} />

      {location.split('/')[1] !== 'submit' && <CreatePostShortcut darkMode={darkMode} />}

      <div id='container'>
        <Routes>

          <Route path='/' index element={<MainPage darkMode={darkMode} />} />
          <Route path='/submit/*' element={<CreatePost darkMode={darkMode} />} />
          <Route path='r/:subId' element={<Sub darkMode={darkMode} />} />
          <Route path='r/:subId/subSettings' element={<SubSettings darkMode={darkMode} />} />
          <Route path='u/:userId' element={<UserSpace darkMode={darkMode} />} />
          <Route path='r/:subId/p/:postId' element={<Post darkMode={darkMode} />} />
        </Routes>
      </div>
    </GlobalProvider>

  )
}
