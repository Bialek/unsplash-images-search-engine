import { connect } from 'react-redux';
import { sortBy } from '../../actions/index';
import  FavoriteAndSortBy from '../../Presetional/FavoriteAndSortBy/FavoriteAndSortBy';

const mapDispatchToProps = { sortBy }

export const FavoriteAndSortByContainer = connect(
    null,
    mapDispatchToProps
)(FavoriteAndSortBy)