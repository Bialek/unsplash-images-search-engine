import { combineReducers } from 'redux';
import { photos } from './photos';
// import { isFetching } from './isFetching';
import { currentCategory } from './currentCategory';
import { categoriesList } from './categoriesList';


export default combineReducers({
    photos,
    currentCategory,
    categoriesList,
    // isFetching,

});