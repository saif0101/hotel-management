import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import header from '../../images/header.png';
import logo from '../../images/icons/logo.png';
import { UserContext } from '../../App';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        <div style={{ backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${header})` }} className="header">
            <nav className="nav">
                <ul>
                    <li>
                        <img className="logo" src={logo} alt=""/>
                    </li>
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link className="btn-book" to="/book">Book</Link>
                    </li>
                    <li>
                    {loggedInUser.email? <button onClick={()=>setLoggedInUser({})}>Log Out</button> : <NavLink to="/login">Log In</NavLink>}
                        {/* <Link to="/login">Login</Link> */}
                    </li>
   
                    <li >
                        {loggedInUser.name}
                    </li>
                </ul>
            </nav>
            <div className="title-container">
                <h1>Burj Al Arab</h1>
                <h2>A global icon of Arabian luxury</h2>
            </div>
        </div>
    );
};

export default Header;