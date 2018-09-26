import { combineReducers } from 'redux';
import { photos } from './photos';
// import { isFetching } from './isFetching';
import { changeCategory } from './changeCategory';


export default combineReducers({
    photos,
    changeCategory,
    // isFetching,

});