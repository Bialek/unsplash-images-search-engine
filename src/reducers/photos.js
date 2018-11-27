export const photos = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_PHOTOS_SUCCESS': 
            return [
                ...action.photos,
            ]    
        default:
            return state;
    }
}