import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import UserContext from "../contexts/UserContext";
import Posts from './Posts';
import MainHeader from './MainHeader';
import PostContext from '../contexts/PostContext';

const Home = () => {
  const { loggedInUser } = useContext(UserContext);
  const { post } = useContext(PostContext)
  const [isLoading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedInUser) {
      navigate('/login');
    } else {
      setLoading(false);
    }
  }, [loggedInUser, navigate]);

  if (!loggedInUser) {
    return null;
  }


  return (
    <>
      <MainHeader/>
      {isLoading ? (
        <div className="notFound">
          <h2>Loading...</h2>
        </div>
      ) : (
        <>
          {post.length > 0 ? (
            <Posts />
          ) : (
            <div className="notFound">
              <h2>Įrašų nėra</h2>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default Home;