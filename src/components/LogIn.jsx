import React, { useContext } from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from 'react-router-dom';

import logo from "../images/logo.png"

import UserContext from "../contexts/UserContext";

const LogIn = () => {

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: ''
      });
    
      const [loginError, setLoginError] = useState(false);
      const {users, setLoggedInUser} = useContext(UserContext);

      const navigation = useNavigate();
        
      const hanldeSubmit = async (e) => {
        e.preventDefault();
       
        const loggedInUser = users.find(user => user.email === userInfo.email && user.password === userInfo.password);
    
        if(loggedInUser){
          setLoggedInUser(loggedInUser);
          navigation('/home');
        } else {
          setLoginError(true);
        }
      } 
    
    return ( 
    <div className="LogIn_Bg">
        <div className="logInHeader">
                <div className="headerloginSignUp">
                  <div>
                    <img src={logo} alt="logo" className="logo" />
                  </div>
                  <div className="loginSignUpContainer">
                      <NavLink 
                        className="login"
                        style={({ isActive}) => {
                            return {color: isActive ? '#84C7AE' : 'black'};}}
                        to='/logIn'>Log in
                        </NavLink>
                    <br />
                    <NavLink 
                        style={({ isActive}) => {
                            return {color: isActive ? '#84C7AE' : 'black'};}}
                        to='/signUp'>Sign Up
                    </NavLink>
                  </div>  
                </div>
            <div>
            <form className="loginForm" onSubmit={hanldeSubmit}>
                <h1>Welcome back</h1>
                <h3>Please enter your details</h3>
                <label>
                    Email:
                    <input type="text" name="email"
                        value={userInfo.email}
                        onChange={(e)=>setUserInfo({...userInfo, email:e.target.value})}
                    />
                </label>
                
                <label>
                    Password:
                    <input type="password" name="password"
                        value={userInfo.password}
                        onChange={(e)=>setUserInfo({...userInfo, password:e.target.value})}
                    />

                </label>
                <input type="submit" className="submit" value="Log In" />

                { 
                    loginError && <span className="error">Klaidinga prisijungimo informacija</span> 
                }
            </form>
        </div>
    </div>
    </div>
);
}
 
export default LogIn;