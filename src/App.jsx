import { Outlet } from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import { useEffect, useState } from 'react';
import UserContext from './utils/UserContext';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';

function App() {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Abdul Kaiyum"
    }
    setUserName(data.name)
  }, [])
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
        <div className='app'>
          <Header></Header>
          <Outlet></Outlet>
        </div>
      </UserContext.Provider>
    </Provider>
  )
}

export default App
