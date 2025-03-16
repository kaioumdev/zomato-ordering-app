import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
    const [btnNameReact, setBtnNameReact] = useState('Login');
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems)
    return (
        <div className='flex justify-between bg-pink-100 shodow-lg'>
            <div className='logo-container'>
                <Link to="/">
                    <img className='w-36' src={LOGO_URL} alt='logo' />
                </Link>
            </div>
            <div>
                <div className='flex items-center'>
                    <ul className='flex p-4 m-4'>
                        <li className="px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>
                        <li className="px-4">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="px-4">
                            <Link to="/about">About Us</Link>
                        </li>
                        <li className="px-4">
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li className="px-4">
                            <Link to="/grocery">Grocery</Link>
                        </li>
                        <li className="px-4 font-bold text-2xl">
                            <Link to="/cart">
                                Cart - ({cartItems?.length} items)
                            </Link>
                        </li>
                        <button className="login" onClick={() => btnNameReact === "Login" ? setBtnNameReact("Logout") : setBtnNameReact("Login")}>{btnNameReact}</button>
                        <li className="px-4 font-bold">
                            <Link>{loggedInUser}</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;