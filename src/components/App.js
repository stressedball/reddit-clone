import styled from 'styled-components';
import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreatePost from './create-post/CreatePost';
import CreateSub from './menu/CreateSub';
import Header from './header/Header';
import Home from '../components/home/Home'
import Menu from './menu/Menu';
import Post from './post/Post';
import PublicMenu from './menu/PublicMenu';
import Sub from './sub/Sub';
import SubSettings from './sub/sub-settings.js/SubSettings';
import UserSpace from './user-space/UserSpace';
import { GlobalContext } from './providers/GlobalProvider';
import { ThemeContext } from './providers/ThemeProvider';
import { darkMain, lightMain } from '../sc-css/COLORS';
import { StyledMenu } from '../sc-css/StyledMenu';

function App() {

  const { darkMode } = useContext(ThemeContext)
  const { user } = useContext(GlobalContext)
  const [dropdownMenu, setDropdownMenu] = useState(false)
  const [gridArea, setGridArea] = useState('')
  const [makeSub, setMakeSub] = useState(false)

    useEffect(() => {
    if (dropdownMenu) setGridArea('whole')
    else if (!dropdownMenu || !user) setGridArea('')
  }, [dropdownMenu])

  const handleMenuDisplay = () => setDropdownMenu(!dropdownMenu)
  const handleCreateSub = () => { setMakeSub(!makeSub) }

  return (
    <BrowserRouter>
      <StyledApp id='App' className={`${darkMode}`} >

        <Header handleCreateSub={handleCreateSub} dropdownMenu={dropdownMenu} handleMenuDisplay={handleMenuDisplay} />

        <StyledMenu className={`${darkMode} ${gridArea}`}>
          {!user ? <PublicMenu /> :
            dropdownMenu ?
              null : <Menu handleCreateSub={handleCreateSub} dropdownMenu={dropdownMenu} handleMenuDisplay={handleMenuDisplay} />
          }
        </StyledMenu>

        <StyledDiv className={`${gridArea}`}>

            <Routes>
              <Route path="reddit-clone/*" element={<Home />} />
              <Route path='r/:subId' element={<Sub />} />
              <Route path='r/:subId/submit/*' element={<CreatePost />} />
              <Route path='r/:subId/subSettings' element={<SubSettings />} />
              <Route path='r/:subId/p/:postId' element={<Post />} />
              <Route path='u/:userId' element={<UserSpace />} />
              <Route path='/submit/*' element={<CreatePost />} />
            </Routes>

        </StyledDiv>
      </StyledApp >

      {makeSub ? <CreateSub darkMode={darkMode} setMakeSub={setMakeSub} /> : null}

    </BrowserRouter>
  );
}


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
    display:flex;
    flex-direction: column;

    &.whole {
      grid-area: 2/1/2/3;
    }
`

export default App;
