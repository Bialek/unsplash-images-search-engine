export const photos = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CONTACTS_SUCCESS': 
            return [
                ...action.photos,
            ]    
        default:
            return state;
    }
}