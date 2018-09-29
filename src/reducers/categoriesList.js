export const categoriesList = (state = [], action) => { 
    switch (action.type) {
        case 'CATEGORY_LIST':
            if (state.indexOf(action.category) === -1) {           
                return [...state, action.category]
             } 
        default:
            return state
    }
}