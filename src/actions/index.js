import UnsplashApi from './UnsplashApi';

export const photosFetched = photos => ({
  type: 'FETCH_PHOTOS_SUCCESS',
  photos,
});

export const currentCategory = category => ({
  type: 'CURRENT_CATEGORY',
  category
});

export const sortBy = sortBy => ({
  type: 'SORT_BY',
  sortBy
});

export const categoryList = category => ({
  type: 'CATEGORY_LIST',
  category
});

export const favoriteList = favorite => ({
  type: 'FAVORITE_LIST',
  favorite
});

export const getFavorite = () => (dispatch, getState) => {
  dispatch(photosFetched(getState().favoriteList));
};

export const isfetching = boolean => ({
  type: 'IS_FETCHING',
  isFetching: boolean
});

export const fetchphotos = () => (dispatch, getState) => {
  UnsplashApi(getState).then(photos => {
    dispatch(photosFetched(photos));
    dispatch(isfetching(true));
  });
};
  
export const changeCategoryAndFetch = category => dispatch => { 
  dispatch(isfetching(false));
  dispatch(currentCategory(category));
  dispatch(categoryList(category));
  dispatch(fetchphotos());
}