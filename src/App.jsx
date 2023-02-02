import { Route, Routes } from 'react-router-dom';
import './App.css';
//import AddForm from './components/AddForm';
import Header from './components/Header';
//import Header from './components/Header';
import Home from './components/Home';
import LogIn from './components/LogIn';
//import Posts from './components/Posts';
import SignUp from './components/SignUp';
//import SignUp from './components/SignUp';


function App() {
  return (
  <>
     <Routes>
        <Route path="/" element={<Header/>}/>
       
        <Route path="/signUp" element={<SignUp />}/>
        <Route path="/login" element={<LogIn />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
  </>
  );
}

export default App;
