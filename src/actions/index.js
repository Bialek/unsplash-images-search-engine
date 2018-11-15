import UnsplashApi from './UnsplashApi';

export const contactsFetched = photos => ({
  type: 'FETCH_CONTACTS_SUCCESS',
  photos,
});

// export const searchContacts = (text) => ({
//   type: 'SEARCH_CONTACTS',
//   text
// });

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

// export const isLoading = boolean => ({
//   type: 'IS_FETCHING',
//   isFetching: boolean
// });

export const fetchContacts = () => (dispatch, getState) => {
  UnsplashApi(getState).then(photos => {
    dispatch(contactsFetched(photos));
    
    
    // dispatch(isLoading(true));
  });
};
  
export const changeCategoryAndFetch = category => dispatch => { 
  // dispatch(isLoading(false));
  dispatch(currentCategory(category));
  dispatch(categoryList(category));
  dispatch(fetchContacts());
}