import CreatePost from './CreatePost';
import CreatePostShortcut from './CreatePostShortcut';
import { GlobalProvider } from '../providers/GlobalProvider';
import Header from '../header/Header'
import Post from '../post/Post'
import SubPosts from '../subs/SubPosts'
import MainPage from './MainPage'
import UserSpace from '../user-space/UserSpace';

import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';

export default function Home() {

  const location = useLocation().pathname

  useEffect(() => {

  }, [])

  return (

    <GlobalProvider>

      <Header />

      {location.split('/').pop() !== 'submit' && <CreatePostShortcut />}

      <div id='container'>

        <Routes>

          <Route index element={<MainPage />} />
          <Route path='/submit' element={<CreatePost />} />
          <Route path=':subId' element={<SubPosts />} />
          <Route path=':userId' element={<UserSpace />} />
          <Route path=':subId/:postId' element={<Post />} />

        </Routes>

      </div>

    </GlobalProvider>

  )
}
