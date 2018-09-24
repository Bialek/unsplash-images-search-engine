import UnsplashApi from './UnsplashApi';

export const contactsFetched = photos => ({
  type: 'FETCH_CONTACTS_SUCCESS',
  photos,
});

export const searchContacts = (text) => ({
  type: 'SEARCH_CONTACTS',
  text
});

export const changeSeed = seed => ({
  type: 'CHANGE_SEED',
  seed
});

export const isLoading = boolean => ({
  type: 'IS_FETCHING',
  isFetching: boolean
});

export const fetchContacts = () => (dispatch, getState) => {
  UnsplashApi(getState).then(photos => {
    dispatch(contactsFetched(photos));
    dispatch(isLoading(true));
  });
};
  
export const changeSeedAndFetch = seed => dispatch => {
  dispatch(isLoading(false));
  dispatch(changeSeed(seed));
  dispatch(fetchContacts());
}