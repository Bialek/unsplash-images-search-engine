export const changeCategory = (state = '', action) => { 
    switch (action.type) {
        case 'CHANGE_CATEGORY':
            return action.category
        default:
            return state
    }
}