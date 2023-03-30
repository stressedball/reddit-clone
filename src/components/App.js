import styled from 'styled-components';
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import CreatePost from './create-post/CreatePost';
import CreatePostShortcut from './create-post-shortcut/CreatePostShortcut';
import Header from './header/Header';
import Home from '../components/home/Home'
import Menu from './menu/Menu';
import Post from './post/Post';
import PublicMenu from './menu/PublicMenu';
import Sub from './sub/Sub';
import SubSettings from './sub/sub-settings.js/SubSettings';
import SideContent from './home/SideContent';
import SubHeader from './sub/SubHeader';
import UserSpace from './home/UserSpace';
import { GlobalContext } from './providers/GlobalProvider';
import { ThemeContext } from './providers/ThemeProvider';
import { darkMain, lightMain } from '../sc-css/COLORS';
import { StyledMenu } from '../sc-css/StyledMenu';
import { doc } from 'firebase/firestore';

const StyledApp = styled.div`
  background-color: ${lightMain};
  height:100vh;
  display: grid;
  grid-template-columns: 270px calc(100vw - 270px);
  grid-template-rows: 48px calc(100vh - 48px);
  overflow: hidden;

  &.dark {
    background-color: ${darkMain};
    color: #d7dadc;
  }
`

const StyledDiv = styled.div`
    overflow-y: auto;

    &.whole {
      grid-area: 2/1/2/3;
    }
    `

const StyledOutlet = styled.div`
    display:flex;
    min-height: fit-content;
    overflow-y:auto;
    justify-content:center;
    padding:20px 24px;
`

const DisplayPreview = styled.div`
  width: 100%;
  gap: 16px;
    display:flex;
    flex-direction:column;

  &.private{
    gap:0;
  }
`

function App() {

  const { darkMode } = useContext(ThemeContext)
  const { user } = useContext(GlobalContext)
  const [dropdownMenu, setDropdownMenu] = useState(false)
  const [gridArea, setGridArea] = useState('')
  const [display, setDisplay] = useState('')

  useEffect(() => { }, [darkMode])

  useEffect(() => {
    if (dropdownMenu) setGridArea('whole')
    else if (!dropdownMenu || !user) setGridArea('')
  }, [dropdownMenu])

  useEffect(() => {
    if (user) setDisplay('private')
  }, [user])

  const handleMenuDisplay = () => setDropdownMenu(!dropdownMenu)

  return (
    <BrowserRouter>
      <StyledApp id='App' className={`${darkMode}`} >

        <Header dropdownMenu={dropdownMenu} handleMenuDisplay={handleMenuDisplay} />

        <StyledMenu className={`${darkMode} ${gridArea}`}>
          {!user ? <PublicMenu /> :
            dropdownMenu ?
              null : <Menu dropdownMenu={dropdownMenu} handleMenuDisplay={handleMenuDisplay} />
          }
        </StyledMenu>

        <StyledDiv className={`${gridArea}`}>

          <SubHeader darkMode={darkMode} />

          <StyledOutlet>

            <DisplayPreview id='div-styled-query' className={`${display}`}>

              {user ? <CreatePostShortcut /> : null}

              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path='r/:subId' element={<Sub />} />
                <Route path='u/:userId' element={<UserSpace />} />
                <Route path='/submit/*' element={<CreatePost />} />
                <Route path='r/:subId/submit/*' element={<CreatePost />} />
                <Route path='r/:subId/subSettings' element={<SubSettings />} />
                <Route path='r/:subId/p/:postId' element={<Post />} />
              </Routes>
            </DisplayPreview>

            <SideContent />

          </StyledOutlet>
        </StyledDiv>
      </StyledApp >
    </BrowserRouter>
  );
}

export default App;
