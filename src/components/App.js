import React, { useContext } from 'react';
import LogIn from './LogIn';
import Home from './Home';
import { AuthContext } from './AuthProvider';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';

function App() {

  const { userId } = useContext(AuthContext)

  return (
    <div id='App'>
        <BrowserRouter>
          <Routes>

            <Route path='*' element={<PrivateRoute userId={userId} />} >
            </Route>

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
