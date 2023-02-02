import { createContext, useEffect, useState } from "react";
//import { useContext } from "react";
//import UserContext from "./UserContext";

const PostContext = createContext();

const PostProvider = ({children}) =>{
    const [post, setPost] = useState([]);
    //const { loggedInUser } = useContext(UserContext);


    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:3000/postai');
            const duomenys = await res.json();
            setPost(duomenys);
        };
        fetchData();
    },[]);

// 1 pabaiga.

const addNewPost = async (newPost) => {
    const res = await fetch('http://localhost:3000/postai', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
    });
    const data = await res.json();
    setPost([...post, data]);
}

return (
    <PostContext.Provider
        value={{
            post,
            setPost,
            addNewPost
            
            
        }}
        >
        {children}
    </PostContext.Provider>
)

}

export {PostProvider};
export default PostContext;