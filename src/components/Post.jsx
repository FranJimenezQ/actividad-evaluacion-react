import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';


  const heartIcon = <FontAwesomeIcon icon={faHeart}/>
  const commentIcon = <FontAwesomeIcon icon={faComment} />

function Post({fecha, autor, description, image, comments }) {
    const [likes, setLikes] = useState(0);
    const handleLikesClick = () => {
        setLikes(likes + 1);
    }

    return (
        <div className="card card-container">
            <div className="cardPostImage">
                <img src={image} className="card-img-top" alt="" />
            </div>

            <div className="card-body CarBody1">
                <div className="cardPostFecha">
                    <p className="card-text">{fecha}</p>
                </div>
                <div className="cardPostAutor">
                    <p className="card-text">@{autor}</p>
                </div>
                <div className="cardPostLikes"onClick={handleLikesClick}>
                    <i className='heartIcon'>{heartIcon}</i>                
                    <p className="card-text">{likes}</p>
                </div>

                
            </div>
            <div className="card-body CarBody2">
                <p className="card-text">{description}</p>
            </div>
            <div className="card-body CarBody3">
                <p className="card-text">
                    <i className='commentIcon'>{commentIcon}</i>
                    {comments} comments!</p>            
            </div>
        </div>
    );
  }
  
  export default Post;