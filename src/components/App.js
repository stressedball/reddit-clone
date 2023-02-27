import LogIn from './log-in_sign-up/LogIn';
import Home from './home/Home';
import SignUp from './log-in_sign-up/SignUp';
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from './providers/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './providers/ThemeProvider';

function App() {

  const { userId } = useContext(AuthContext)
  const { darkMode } = useContext(ThemeContext)

  useEffect(() => { }, [darkMode])

  return (
    <div id='App' className={`${darkMode}`} >
      <BrowserRouter>
        <Routes>

          <Route path="*" element={<PrivateRoute userId={userId} />} />

          <Route path='/sign-up' element={<SignUp />} />

        </Routes>
      </BrowserRouter>
      <footer>Brought to you by TS</footer>
    </div>
  );
}

function PrivateRoute({ userId }) {

  return (
    <>
      {
        userId
          ?
          <Home
          />
          :
          <LogIn
            path='/log-in'
          />
      }
    </>
  )

}

export default App;
