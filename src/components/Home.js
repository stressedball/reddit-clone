import React, { useEffect, useState } from 'react'
import Header from './header/Header'
import SubPosts from './subs/SubPosts'
import SubList from './subs/SubList'
import { useLocation, Outlet } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './post/Post'
import { GlobalProvider } from './GlobalProvider';

export default function Home() {

  const location = useLocation()
  return (

    <GlobalProvider>

      <Header />
      {/* CreatePostShortcut */}
      <Routes>
        <Route index element={<SubList />} />

        <Route path=':subId' element={<SubPosts />}>
        </Route>
        <Route path=':subId/:postId' element={<Post />} />
      </Routes>
    </GlobalProvider>

  )
}
