import './App.css';
import Navbar from './components/Navbar';
import PostList from './components/PostList';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
    <Navbar></Navbar> 
    <SearchBar></SearchBar>
    <PostList></PostList>     
    </div>
  );
}

export default App;
