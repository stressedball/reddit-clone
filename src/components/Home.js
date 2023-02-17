import React, { useEffect, useState } from 'react'
import Header from './header/Header'
import Post from './post/Post'
import SubList from './subs/SubList'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SubPosts from './subs/SubPosts'
import { GlobalProvider } from './GlobalProvider'


export default function Home() {


  return (

    <BrowserRouter>

      <GlobalProvider>
      <Header />
      {/* CreatePostShortcut */}
      <Routes>

        <Route
          path='/'
          element={<SubList />} />

        <Route
          path='/:post'
          element={<Post />} />

        <Route
          path='/subs/:id'
          element={<SubPosts />} />

      </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}
