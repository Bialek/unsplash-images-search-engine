import { connect } from 'react-redux';
import { sortBy, getFavorite } from '../../actions/index';
import  FavoriteAndSortBy from '../../Presetional/FavoriteAndSortBy/FavoriteAndSortBy';

const mapDispatchToProps = { 
    sortBy,
    getFavorite
 }

export const FavoriteAndSortByContainer = connect(
    null,
    mapDispatchToProps
)(FavoriteAndSortBy)