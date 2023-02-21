import CreatePost from './CreatePost';
import CreatePostShortcut from './CreatePostShortcut';
import { GlobalProvider } from '../providers/GlobalProvider';
import Header from '../header/Header'
import Post from '../post/Post'
import Sub from './Sub'
import MainPage from './MainPage'
import UserSpace from './UserSpace';

import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';

export default function Home() {

  const location = useLocation().pathname

  useEffect(() => {

  }, [])

  return (

    <GlobalProvider>

      <Header />

      {location.split('/')[1] !== 'submit' && <CreatePostShortcut />}

      <div id='container'>

        <Routes>

          <Route path='/' index element={<MainPage />} />
          <Route path='/submit/*' element={<CreatePost />} />
          <Route path='r/:subId' element={<Sub />} />
          <Route path='u/:userId' element={<UserSpace />} />
          <Route path='r/:subId/p/:postId' element={<Post />} />

        </Routes>

      </div>

    </GlobalProvider>

  )
}
