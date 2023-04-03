import './Post.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'

  const heartIcon = <FontAwesomeIcon icon={faHeart}/>
  const commentIcon = <FontAwesomeIcon icon={faComment} />

    const cardPost =
        {
            fecha: '6 hrs ago',
            likes:  45,
            autor: 'fran',
            description: 'Some quick example text to build on the card title and make up the bulk of the content.',
            image: <img src='assets/img/acustic_guitar_4.svg' className="img-fluid"></img>,
            comments: 56
        };
function Post() {

    return (
        <div className="card card-container">
            <div className="cardPostImage">
                {cardPost.image}
            </div>

            <div className="card-body CarBody1">
                <div className="cardPostFecha">
                    <p className="card-text">{cardPost.fecha}</p>
                </div>
                <div className="cardPostAutor">
                    <p className="card-text">@{cardPost.autor}</p>
                </div>
                <div className="cardPostLikes">
                    <i className='heartIcon'>{heartIcon}</i>                
                    <p className="card-text">{cardPost.likes}</p>
                </div>

                
            </div>
            <div className="card-body CarBody2">
                <p className="card-text">{cardPost.description}</p>
            </div>
            <div className="card-body CarBody3">
                <p className="card-text">
                    <i className='commentIcon'>{commentIcon}</i>
                    Comments : ({cardPost.comments})</p>            
            </div>
        </div>
    );
  }
  
  export default Post;