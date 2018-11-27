export const categoriesList = (state = [], action) => { 
    switch (action.type) {
        case 'CATEGORY_LIST':
            if (state.indexOf(action.category) === -1) {           
                return [...state, action.category];
            } 
            return state;

        default:
            return state
    }
}