import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import SearchBar from './components/SearchBar';
import { getProfiles } from './services/postServices';

function App() {
  const [profiles, setProfiles] = useState([null]);
  const [searchTerm, setSearchTerm] = useState("");
  
    const handleSearch = (term) => {
      setSearchTerm(term);
    };

  const handleGetAllProfiles = () => {
    setProfiles(null);
      getProfiles().then((data) => {
        setProfiles(data);
      });
    };  
  return (
    <div className="App">
    <Navbar handleGetAllProfiles={handleGetAllProfiles}></Navbar> 
    <SearchBar handleSearch={handleSearch} onChange={handleSearch}></SearchBar>
    <PostList profiles={profiles} searchTerm={searchTerm}></PostList>     
    </div>
  );
}

export default App;
