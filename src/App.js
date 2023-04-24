import './App.css';
import './App.js'
import React, { useState } from 'react';
import LoginPage from './components/login';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import SearchBar from './components/SearchBar';
import { getProfiles, Login, token } from './services/postServices';
import Profile from './pages/Profile';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [profiles, setProfiles] = useState([null]);
  const [searchTerm, setSearchTerm] = useState("");
  const [auth, setAuth] = useState(token); 
 
  const handleSearch = (term) => {
      setSearchTerm(term);
    };

  const handleGetAllProfiles = () => {
    setProfiles(null);
      getProfiles().then((data) => {
        setProfiles(data);
      });
    };  

    const handleClick = (username, password)=>{
     Login(username, password)
     .then( () =>{
      setAuth(true); 
     });
    }

    if(!auth){

      return <LoginPage onSubmit={handleClick}></LoginPage>
    }
  return (
    <div className="App">
    <Navbar handleGetAllProfiles={handleGetAllProfiles}></Navbar> 
    <SearchBar handleSearch={handleSearch} onChange={handleSearch}></SearchBar>
    <Routes>
      <Route path="/" element={<PostList profiles={profiles} searchTerm={searchTerm}></PostList>} />     
      <Route path="/profile" element={<Profile></Profile>} />     
    </Routes>
    </div>
  );
}

export default App;
