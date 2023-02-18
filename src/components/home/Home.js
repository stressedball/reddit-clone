import CreatePost from './CreatePost';
import CreatePostShortcut from './CreatePostShortcut';
import { GlobalProvider } from '../providers/GlobalProvider';
import Header from '../header/Header'
import Post from '../post/Post'
import SubPosts from '../subs/SubPosts'
import SubList from '../subs/SubList'
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

      {location.split('/').pop() !== 'submit' && <CreatePostShortcut /> }

      <div id='container'>

        <Routes>

          <Route index exact path = '/' element={<SubList />} />

          <Route path='submit' element={<CreatePost />} />
          <Route path=':subId' element={<SubPosts />} />
          <Route path=':subId/:postId' element={<Post />} />
          <Route path=':userId' element={<UserSpace />} />

        </Routes>

      </div>

    </GlobalProvider>

  )
}
