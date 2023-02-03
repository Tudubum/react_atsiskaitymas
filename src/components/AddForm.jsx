import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PostContext from "../contexts/PostContext";
import UserContext from "../contexts/UserContext";
import { useContext} from "react";
import MainHeader from "./MainHeader";

const AddForm = () => {

  const [formInputs, setFormInputs] = useState({
    title: '',
    description: '',
    image: ''
  });

  const { addNewPost } = useContext(PostContext);
  const { loggedInUser } = useContext(UserContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedInUser) {
      navigate("/login");
    }
  }, [loggedInUser, navigate]);

  const handleSubmit = e => {
    e.preventDefault();
    const newPost = {
      title: formInputs.title,
      description: formInputs.description,
      image: formInputs.image,          
      id: Date.now(),
    };

    addNewPost(newPost);
    navigate('/home');
  };

  return (
     <>
     <MainHeader/>
     <div className="LogIn_Bg">
     <div className="postForm">
     <h1>ADD YOUR POST</h1>
     <h3>Share your FAVORITE season</h3>
         <form onSubmit={handleSubmit}>
             <label>
                 Pavadinimas:
                 <input type="text" value={formInputs.title} 
                onChange={(e) => setFormInputs({...formInputs, title:e.target.value})}
                  />
             </label>
             <label>
                 Aprašymas:
                 <textarea type="textarea" value={formInputs.description} 
                 onChange={(e)=> setFormInputs({...formInputs, description:e.target.value})}
                 />
             </label>
             <label>
                 Nuotrauka URL:
                 <input type="text" name="description" value={formInputs.image} 
                 onChange={(e)=> setFormInputs({...formInputs, image:e.target.value})} />
             </label>
             <button className="submit" type="submit">Add new post</button>
         </form>
     </div>
     </div>
 </> 
  );
};

export default AddForm;