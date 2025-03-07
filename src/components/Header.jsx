import { LOGO_URL } from "../utils/contants";

const Header = () => {
    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' src={LOGO_URL} alt='logo' />
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

export default Header;