import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from './providers/AuthProvider';
import { ThemeContext } from './providers/ThemeProvider';
import CreatePost from './create-post/CreatePost';
import Header from './header/Header';
import MainPage from './main-page/MainPage';
import Menu from './menu/Menu';
import Post from './post/Post';
import PublicPage from './main-page/PublicPage';
import PublicMenu from './menu/PublicMenu';
import Sub from './sub/Sub';
import SubSettings from './sub/sub-settings.js/SubSettings';
import UserSpace from './home/UserSpace';
import { StyledMenu } from '../sc-css/StyledMenu';
import SideContent from './home/SideContent';
import { GlobalContext } from './providers/GlobalProvider';

const StyledApp = styled.div`
  background-color:#dae0e6;
  height:100vh;
  display: grid;
  grid-template-columns: 270px calc(100vw - 270px);
  grid-template-rows: 48px calc(100vh - 48px);
  overflow: hidden;

  &.dark {
    background-color:#030303;
    color:#d7dadc;
  }
`

const StyledDiv = styled.div`
    display: flex;
    overflow: hidden;
    flex: 1 0 auto;
    `

const PostPreviewFlex = styled.div`
    display:flex;
    flex-direction:column;
    width: 640px;
    gap: 16px;
`

const StyledOutlet = styled.div`
    display:flex;
    min-height: fit-content;
    overflow-y:auto;
    width:100%;
    justify-content:center;
    padding:20px 24px;
`

function App() {

  const { darkMode } = useContext(ThemeContext)
  const { user } = useContext(GlobalContext)
  const [dropdownMenu, setDropdownMenu] = useState(false)

  useEffect(() => { }, [darkMode])
  useEffect(() => { }, [user])
  useEffect(() => { }, [dropdownMenu])

  const handleMenuDisplay = () => setDropdownMenu(!dropdownMenu)

  return (
    <BrowserRouter>
      <StyledApp id='App' className={`${darkMode}`} >

        <Header dropdownMenu={dropdownMenu} handleMenuDisplay={handleMenuDisplay} />

        {!user ?
          <StyledMenu className={`${darkMode}`}>
            <PublicMenu />
          </StyledMenu>
          :
          dropdownMenu ? null :
            <StyledMenu className={`${darkMode}`}>
              <Menu dropdownMenu={dropdownMenu} handleMenuDisplay={handleMenuDisplay} />
            </StyledMenu>
        }
        <StyledDiv>
          <StyledOutlet>

            <PostPreviewFlex>
              <Routes>
                <Route exact path="/" element={<PublicPage />} />
                <Route path='r/:subId' element={<Sub />} />
                <Route path='u/:userId' element={<UserSpace />} />

                <Route path='/submit/*' element={<CreatePost />} />
                <Route path='r/:subId/subSettings' element={<SubSettings />} />
                <Route path='r/:subId/p/:postId' element={<Post />} />
              </Routes>

            </PostPreviewFlex>

            <SideContent />

          </StyledOutlet>
        </StyledDiv>

      </StyledApp >
    </BrowserRouter>
  );
}

export default App;
