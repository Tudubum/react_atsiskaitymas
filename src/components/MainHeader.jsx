import logo from "../images/logo.png";
import { NavLink } from "react-router-dom";

import React, { useContext } from 'react';
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const MainHeader = () => {
    const { loggedInUser, setLoggedInUser } = useContext(UserContext);
    const navigate = useNavigate();
  
    const handleLogout = () => {
        setLoggedInUser(null);
        navigate("/login");
  };

    return ( 
        <>
            <div className="mainHeader">
                <div className="navbar">
                    <div>
                        <img src={logo} alt="logo" className="logo" />
                    </div>
                    <div className="mainHeader_links">
                        <NavLink 
                        className="addForm"
                        style={({ isActive}) => {
                            return {color: isActive ? '#84C7AE' : 'black'};}}
                        to='/home'>Home</NavLink>    
                        <NavLink 
                        style={({ isActive}) => {
                            return {color: isActive ? '#84C7AE' : 'black'};}}
                        className="addForm" to='/add'>Add your post</NavLink>  
                    </div>
                    {loggedInUser && (
                        <button className="submit_logout" onClick={handleLogout}>Log Out</button>
                    )}
                </div>
            </div>
        
        </>
     );
}
 
export default MainHeader;