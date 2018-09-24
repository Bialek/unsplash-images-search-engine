import React from 'react';
import './Photo.css';

const Photo = ({photo, addFavourite}) => (
    <div className="photo">   
        <img src={photo.urls.regular} alt="unsplash"/>
        <i 
            className="fa fa-heart"
            onClick={()=> addFavourite(photo)}
        ></i>
    </div>
);

export default Photo;