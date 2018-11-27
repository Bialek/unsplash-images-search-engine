export const favoriteList = (state = [], action) => { 
    switch (action.type) {
        case 'FAVORITE_LIST':
            if (state.indexOf(action.favorite) === -1) {           
                return [...state, action.favorite];
            } 
            return state;
            
        default:
            return state
    }
}