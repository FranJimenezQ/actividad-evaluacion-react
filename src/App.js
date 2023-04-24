import './App.css';
import React, { useState } from 'react';
import LoginPage from './components/login';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import SearchBar from './components/SearchBar';
import { getProfiles, Login, token } from './services/postServices';

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
    <PostList profiles={profiles} searchTerm={searchTerm}></PostList>     
    </div>
  );
}

export default App;
