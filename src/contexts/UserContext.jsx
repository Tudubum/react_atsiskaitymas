import { useEffect } from "react";
import { useState, createContext } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [users, setUsers] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState();

useEffect (() => {
    const fetchData = async () => {
        const response = await fetch('http://localhost:3000/users');
        const useriai = await response.json();
        setUsers(useriai);
    }
    fetchData();
    }, []);

    const addNewUser = async (newUser) => {
        try {
        const res = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
        });
        const updatedUsers = await res.json();
        setUsers([...users, updatedUsers]);
        localStorage.setItem("users", JSON.stringify([...users, updatedUsers]))
        } catch (err) {
        console.error(err);
        }
        };


    return (
            <UserContext.Provider
                value =
                {{
                    users,
                    setUsers,
                    loggedInUser,
                    setLoggedInUser,
                    addNewUser
                }}
            >
                {children}
            </UserContext.Provider>
    );
}

export {UserProvider};
export default UserContext;