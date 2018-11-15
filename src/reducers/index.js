import { combineReducers } from 'redux';
import { photos } from './photos';
// import { isFetching } from './isFetching';
import { currentCategory } from './currentCategory';
import { categoriesList } from './categoriesList';
import { favoriteList } from './favoriteList';
import { sortBy } from './sortBy';


export default combineReducers({
    photos,
    currentCategory,
    categoriesList,
    favoriteList,
    sortBy,
    // isFetching,

});