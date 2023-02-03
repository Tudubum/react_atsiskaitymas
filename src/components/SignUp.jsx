import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";

import logo from "../images/logo.png"

import Footer from "./Footer";
import UserContext from "../contexts/UserContext";


const SignUp = () => {
    const [formInputs, setFormInputs] = useState({
        email: '',
        password: '',
        passwordRepeat: '',
      });
      const [invalidUserEmail, setInvalidUserEmail] = useState(false);
    
      const { users, addNewUser, setLoggedInUser } = useContext(UserContext);
      const navigate = useNavigate();
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if(users.find(user => user.email === formInputs.email)){
          setInvalidUserEmail(true);
        } else {
          let newUser = {
            ...formInputs,
            id: Date.now(),
          };
          addNewUser(newUser);
          setLoggedInUser(newUser);
          navigate("/home");

        }
      }
    
      return (
        <>
          <div className="logInHeader">
                <div className="headerloginSignUp">
                  <div>
                    <img src={logo} alt="logo" className="logo" />
                  </div>
                  <div className="loginSignUpContainer">
                      <Link className="login" to='/logIn'>Log in</Link>
                    <br />
                    <Link to='/signUp'>Sign Up</Link>
                  </div>  
                </div>
          <form onSubmit={handleSubmit} className="signUpForm">
            <h1>Create An Account</h1>
            <h3>And Get FREE Access to Content</h3>
            <label>
              Email:
              <input type="email" name="email" value={formInputs.email}
                onChange={(e) => setFormInputs({...formInputs, email:e.target.value})}
              />
            </label>
            <label>
              Password:
              <input type="password" name="password" value={formInputs.password}
                onChange={(e) => setFormInputs({...formInputs, password:e.target.value})}
              />
            </label>
            <label>
              Repeat Password:
              <input type="password" name="passwordRepeat" value={formInputs.passwordRepeat}
                onChange={(e) => setFormInputs({...formInputs, passwordRepeat:e.target.value})}
              />
            </label>
            <input type="submit" value="Register" className="submit" />
          </form>
          {
            invalidUserEmail && <span className="error">User with such email already exists.</span>
          }
          </div>
          <Footer/>
        </>
      );
}
 
export default SignUp;