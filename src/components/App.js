import LogIn from './log-in_sign-up/LogIn';
import Home from './home/Home';
import SignUp from './log-in_sign-up/SignUp';
import React, { useContext } from 'react';
import { AuthContext } from './providers/AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const { userId } = useContext(AuthContext)

  return (
    <div id='App'>
        <BrowserRouter>
          <Routes>

            <Route path='*' element={<PrivateRoute userId={userId} />} />

            <Route path='/sign-up' element={<SignUp />} />

          </Routes>
        </BrowserRouter>
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
          />
      }
    </>
  )

}

export default App;
