import { NavLink } from "react-router-dom";
import logo from "../images/logo.png"

const Header = () => {

    return ( 
        <>
            <div className="logInHeader">
                <div>
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div className="headerloginSignUp_header">
                    <NavLink 
                    className="login active" 
                    style={({ isActive}) => {
                        return {color: isActive ? 'red' : 'black'};}}
                    to='/logIn'>Log in
                    </NavLink>
                    <br />
                    <NavLink 
                    style={({ isActive}) => {
                        return {color: isActive ? 'red' : 'black'};}}
                    to='/signUp'>Sign Up</NavLink>
                </div>
            </div>
        </>
     );
}
 
export default Header;