import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const MainHeader = () => {
    return ( 
        <>
            <div className="mainHeader">
                <div className="navbar">
                    <div>
                        <img src={logo} alt="logo" className="logo" />
                    </div>
                    <div className="mainHeader_links">
                        <Link to='/home'>Home</Link>    
                        <Link className="addForm" to='/add'>Add your post</Link>  
                    </div>
                </div>
            </div>
        
        </>
     );
}
 
export default MainHeader;