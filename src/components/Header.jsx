import { useState } from "react";
import { LOGO_URL } from "../utils/contants";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState('Login');
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
                        <button className="login" onClick={() => btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")}>{btnNameReact}</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;