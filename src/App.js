import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './Contexts/AuthContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  
  useEffect(() => {
    const storeLoggedInInfo = localStorage.getItem('isLoggedIn');
    if(storeLoggedInInfo === 'true'){
      setIsLoggedIn(true)
    }
},[])

  const loginHandler = (email, password, clg) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', 'true')
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
      <AuthContext.Provider value={{
        isLoggedIn:isLoggedIn,
        onLogout: logoutHandler
      }}>
      <MainHeader  />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
  );
}

export default App;
