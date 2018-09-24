import React from 'react';
import Photo from '../Photo/Photo';
import './PhotosList.css';

const PhotosList = ({photos, addFavourite}) =>  (
    <div className="photosContainer">
          {photos.map(photo => 
            <Photo 
                key={photo.id} 
                photo={photo}
                addFavourite={(photo) => addFavourite(photo)}
            />)}
    </div>
);

export default PhotosList;