export const sortBy = (state = '', action) => { 
    switch (action.type) {
        case 'SORT_BY':
            return action.sortBy
        default:
            return state
    }
}