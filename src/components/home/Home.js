import Header from '../header/Header'
import SubPosts from '../subs/SubPosts'
import SubList from '../subs/SubList'
import Post from '../post/Post'
import CreatePostShortcut from './CreatePostShortcut';
import { GlobalProvider } from '../providers/GlobalProvider';
import React from 'react'
import { useLocation } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';

export default function Home() {

  const location = useLocation()

  return (

    <GlobalProvider>

      <Header />

      <CreatePostShortcut />

      <div id='container'>
        
        <Routes>

          <Route index element={<SubList />} />

          <Route path=':subId' element={<SubPosts />} />
          <Route path=':subId/:postId' element={<Post />} />

        </Routes>

      </div>

    </GlobalProvider>

  )
}
