import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostContext from "../contexts/PostContext";
import UserContext from "../contexts/UserContext";
import { useContext} from "react";

const AddForm = () => {

    const [formInputs, setFormInputs] = useState({
        title: '',
        description: '',
        image: ''
      });
    
      const { addNewPost } = useContext(PostContext);
      const { loggedInUser } = useContext(UserContext);
    
      const navigation = useNavigate();
    
      const handleSubmit = e => {
        e.preventDefault();
        const newPost = {
          title: formInputs.title,
          description: formInputs.description,
          image: formInputs.image,          
          id: Date.now(),
        };
    
        addNewPost(newPost);
        navigation('/');
      }

      console.log(addNewPost)
    
      return (
         <>
         <div className="placeForm">
         <h3>ADD YOUR POST</h3>
             <form onSubmit={handleSubmit}>
                 <label>
                     Pavadinimas:
                     <input type="text" value={formInputs.title} 
                    onChange={(e) => setFormInputs({...formInputs, title:e.target.value})}
                      />
                 </label>
                 <label>
                     Aprašymas:
                     <input type="textarea" value={formInputs.description} 
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
     </> );
}
 
export default AddForm;