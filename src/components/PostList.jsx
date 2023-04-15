import './PostList.css'
import { useState, useEffect } from 'react';
import { getProfiles } from '../services/postServices';
import Post from './Post';

function PostList({searchTerm}) {
    const [profiles, setProfiles] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);

    useEffect(() => {
        getProfiles().then((data)=>{
            document.getElementById("loading").style.display = "none";
            setProfiles(data);
            setFilteredPosts(data);
        });
    }, []);
    useEffect(() => {
        const filteredProfiles = profiles.filter((profile) =>
          profile.autor.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredPosts(filteredProfiles);
      }, [profiles, searchTerm]);
    
      

    return (
 <div className="postListContainer" id="postListContainer">
      <p id="loading">Loading...</p>
      {filteredPosts.map((profile, i) => (
        <Post
          key={i}
          image={profile.image}
          fecha={profile.fecha}
          likes={profile.likes}
          autor={profile.autor}
          description={profile.description}
          comments={profile.comments}
        />
      ))}
    </div>
    );
  }
  
  export default PostList;