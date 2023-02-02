import React, { useContext } from 'react';
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Posts from './Posts';

const Home = () => {
  const {loggedInUser} = useContext(UserContext);
  const navigation = useNavigate();

  if (!loggedInUser) {
    navigation('/login');
    return null;
  }

  return ( 
    <>
      <Posts/>
    </>
  );
}
 
export default Home;
 
