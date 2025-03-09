import { useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState('Login');
    return (
        <div className='header'>
            <div className='logo-container'>
                <Link to="/">
                    <img className='logo' src={LOGO_URL} alt='logo' />
                </Link>
            </div>
            <div>
                <div className='nav-items'>
                    <ul className='nav-items'>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li>Cart</li>
                        <button className="login" onClick={() => btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")}>{btnNameReact}</button>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;