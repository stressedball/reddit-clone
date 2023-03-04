import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeContext } from './providers/ThemeProvider';
import styled from 'styled-components';
import Header from './header/Header';
import { Outlet } from 'react-router-dom';
import CreatePost from './create-post/CreatePost';
import MainPage from './main-page/MainPage';
import Post from './post/Post';
import Sub from './sub/Sub';
import SubSettings from './sub/sub-settings.js/SubSettings';
import UserSpace from './home/UserSpace';

const Footer = styled.footer`
  position:absolute;
  bottom:0;
  width:100vw;
  text-align:center;
`

const StyledDiv = styled.div`
  background-color:#dae0e6;
  min-height:100vh;

  &.dark {
    background-color:#030303;
    color:#d7dadc;
  }
`

function App() {

  const { darkMode } = useContext(ThemeContext)

  useEffect(() => { }, [darkMode])

  return (
    <StyledDiv id='App' className={`${darkMode}`} >
      <BrowserRouter>

        <Header />

        <Routes>

          <Route exact path="/*" index element={<App />} />

          <Route index element={<MainPage />} />

          <Route path='/submit/*' element={<CreatePost />} />

          <Route path='r/:subId' element={<Sub />} />

          <Route path='r/:subId/subSettings' element={<SubSettings />} />

          <Route path='u/:userId' element={<UserSpace />} />

          <Route path='r/:subId/p/:postId' element={<Post />} />

        </Routes>

        <Outlet />

      </BrowserRouter>
      <Footer>Brought to you by TS</Footer>
    </StyledDiv>
  );
}

export default App;
