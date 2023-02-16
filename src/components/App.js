import React, { useContext } from 'react';
import LogIn from './LogIn';
import Home from './Home';
import { AuthContext } from './AuthProvider';

function App() {

  const { userId } = useContext(AuthContext)

  return (
    <div id='App'>
      {
        userId
          ?
          <Home />
          :
          <LogIn />
      }
    </div>
  );
}

export default App;
