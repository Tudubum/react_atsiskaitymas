import { Link } from "react-router-dom";

const Header = () => {

    //const {loggedInUser} = useContext(UserContext);


    return ( 
        <>
            <div className="logInHeader">
                <div className="headerloginSignUp">
                    <Link className="login" to='/logIn'>Log in</Link>
                    <br />
                    <Link to='/signUp'>Sign Up</Link>
                </div>
            </div>
        </>
     );
}
 
export default Header;