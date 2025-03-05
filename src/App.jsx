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

const RestaurantCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0f0" }}>
      <img className='res-logo' src="https://b.zmtcdn.com/data/dish_photos/91a/f5d03c4d5534a7d7f05a127e053a191a.png" alt="res-logo" />
      <h3>Meghana Foods</h3>
      <h4>Biryani, North Indian</h4>
      <h4>4.4 stars</h4>
      <h4>48 minutes</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className='body'>
      <div className="search">
        Search
      </div>
      <div className="res-container">
        <RestaurantCard />
      </div>
    </div>
  )
}

function App() {

  return (
    <div className='app'>
      <Header></Header>
      <Body></Body>
    </div>
  )
}

export default App
