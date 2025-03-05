import './App.css'

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className='logo' src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png' alt='logo' />
      </div>
      <div>
        <div className='nav-items'>
          <ul className='nav-items'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function App() {

  return (
    <div className='app'>
      <Header></Header>
    </div>
  )
}

export default App
