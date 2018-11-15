import React from 'react';
import Photo from '../Photo/Photo';
import './PhotosList.css';

class PhotosList extends React.Component {
    constructor() {
        super();
        this.state = {
            sortedPhotos: []
        }
    }

    componentWillReceiveProps(nextProps) { 
        this.setState({
            sortedPhotos: nextProps.photos.sort(this.Sort(nextProps.sortBy))
        })  
    }

    Sort(sortBy) { 
		return (a,b) => {
			const result = (a[sortBy] < b[sortBy]) ? -1 : (a[sortBy] > b[sortBy]) ? 1 : 0;
			return result * -1;
		}
    }
    
    render() { 
        return ( 
            <div className="photosContainer">
                {this.state.sortedPhotos.map(photo => 
                    <Photo 
                        key={photo.id} 
                        photo={photo}
                        // addFavourite={(photo) => addFavourite(photo)}
                    />)}
            </div>
        )
    }
}


export default PhotosList;