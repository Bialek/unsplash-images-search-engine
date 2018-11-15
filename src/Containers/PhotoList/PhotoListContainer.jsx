import { connect } from 'react-redux';
import PhotosList from '../../Presetional/PhotosList/PhotosList.jsx';
import { favoriteList } from '../../actions/index';

const mapStateToProps = state => {
    return {
        photos: state.photos,
        sortBy: state.sortBy
    }
}

const mapDispatchToProps = { favoriteList }


export const PhotoListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PhotosList)