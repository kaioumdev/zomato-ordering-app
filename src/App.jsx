import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import { useEffect, useState } from 'react';
import UserContext from './utils/UserContext';

function App() {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Abdul Kaiyum"
    }
    setUserName(data.name)
  }, [])
  return (
    <UserContext.Provider value={{ loggedInUser: userName }}>
      <div className='app'>
        <Header></Header>
        <Outlet></Outlet>
      </div>
    </UserContext.Provider>
  )
}

export default App
