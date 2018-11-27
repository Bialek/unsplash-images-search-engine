import React from 'react';
import './Photo.css'; 
import './PhotosList.css';
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
            <div className="photosContainer">
                {this.state.sortedPhotos.map(photo => 
                    <div 
                        key={photo.id} 
                        className="photo"
                        >   
                            <img src={photo.urls.small} alt="unsplash"/>
                            <button onClick={() => this.onClickHandler(photo)} >
                                <FontAwesomeIcon icon="heart" />
                            </button> 
                    </div> 
                )}         
            </div>
        )
    }
}


export default PhotosList;