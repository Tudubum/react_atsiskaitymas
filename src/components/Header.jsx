import { Link } from "react-router-dom";
import logo from "../images/logo.png"

const Header = () => {

    return ( 
        <>
            <div className="logInHeader">
                <div>
                    <img src={logo} alt="logo" className="logo" />
                </div>
                <div className="headerloginSignUp_header">
                    <Link className="login" to='/logIn'>Log in</Link>
                    <br />
                    <Link to='/signUp'>Sign Up</Link>
                </div>
            </div>
        </>
     );
}
 
export default Header;