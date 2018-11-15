export const favoriteList = (state = [], action) => { 
    switch (action.type) {
        case 'FAVORITE_LIST':
            if (state.indexOf(action.category) === -1) {           
                return [...state, action.category]
            } 
        default:
            return state
    }
}