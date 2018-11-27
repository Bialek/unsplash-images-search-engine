import React from 'react';
import { PhotosWrapper, Photo, PhotoImg, PhotoBtn } from '../../StyledComponents/PhotosList';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class PhotosList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedPhotos: this.props.photos
        }
    }

    componentWillReceiveProps(nextProps) { 
        this.setState({
            sortedPhotos: nextProps.photos.sort(this.Sort(nextProps.sortBy))
        })  
    }

    Sort(sortBy) { 
        if (sortBy !== '') {
            return (a,b) => {
                const result = (a[sortBy] < b[sortBy]) ? -1 : (a[sortBy] > b[sortBy]) ? 1 : 0;
                return result * -1;
            }
        } 
    }

    onClickHandler = photo => {
        this.props.favoriteList(photo)
    }
    
    render() {
        return ( 
            <PhotosWrapper>
                {this.state.sortedPhotos.map(photo => 
                    <Photo key={photo.id} >   
                        <PhotoImg src={photo.urls.small} alt="unsplash"/>
                        <PhotoBtn onClick={() => this.onClickHandler(photo)} >
                            <FontAwesomeIcon icon="heart" />
                        </PhotoBtn> 
                    </Photo> 
                )}         
            </PhotosWrapper>
        )
    }
}


export default PhotosList;