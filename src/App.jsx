import './App.css';

import { Route, Routes } from 'react-router-dom';

import AddForm from './components/AddForm';
import Header from './components/Header';
import Home from './components/Home';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';


function App() {
  return (
  <>
     <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/signUp" element={<SignUp />}/>
        <Route path="/login" element={<LogIn />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/add" element={<AddForm />}/>

      </Routes>
  </>
  );
}

export default App;
